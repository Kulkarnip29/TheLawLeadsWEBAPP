'use server';
/**
 * @fileOverview This file provides an AI-powered content suggestion tool for "The Law Leads" website.
 *
 * - aiContentSuggestions - A function that generates related content suggestions based on the current browsing context.
 * - AIContentSuggestionsInput - The input type for the aiContentSuggestions function.
 * - AIContentSuggestionsOutput - The return type for the aiContentSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIContentSuggestionsInputSchema = z.object({
  currentSection: z
    .string()
    .describe('The title or description of the current section the user is viewing (e.g., "Judiciary Course Page", "Faculty Profile: Dr. Sharma", "Blog Post: How to Ace CLAT PG").'),
  availableCourses: z
    .array(z.string())
    .describe('A list of all available course titles.'),
  availableBlogPosts: z
    .array(z.string())
    .describe('A list of all available blog post titles.'),
  availableStudyMaterials: z
    .array(z.string())
    .describe('A list of all available study material titles.'),
  availableFaculty: z
    .array(z.string())
    .describe('A list of all available faculty names.'),
});
export type AIContentSuggestionsInput = z.infer<typeof AIContentSuggestionsInputSchema>;

const AIContentSuggestionsOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      type: z.enum(['course', 'blog', 'material', 'faculty']).describe('The type of content being suggested.'),
      title: z.string().describe('The title or name of the suggested content item.'),
      description: z.string().describe('A short, AI-generated description explaining why this content is relevant.'),
    })
  ).min(1).max(5).describe('A list of 1 to 5 highly relevant content suggestions.'),
});
export type AIContentSuggestionsOutput = z.infer<typeof AIContentSuggestionsOutputSchema>;

const contentSuggestionPrompt = ai.definePrompt({
  name: 'contentSuggestionPrompt',
  input: {schema: AIContentSuggestionsInputSchema},
  output: {schema: AIContentSuggestionsOutputSchema},
  prompt: `You are an AI content recommender for "The Law Leads" coaching institute. Your goal is to suggest highly relevant courses, blog posts, study materials, or faculty profiles to a user based on the section they are currently viewing.

The user is currently viewing: "{{{currentSection}}}".

Here are the available content items:

Courses:
{{#each availableCourses}}
- {{{this}}}
{{/each}}

Blog Posts:
{{#each availableBlogPosts}}
- {{{this}}}
{{/each}}

Study Materials:
{{#each availableStudyMaterials}}
- {{{this}}}
{{/each}}

Faculty:
{{#each availableFaculty}}
- {{{this}}}
{{/each}}

Based on the current section the user is visiting, suggest 3 to 5 highly relevant and diverse content items from the lists above. For each suggestion, provide its type (course, blog, material, or faculty), its title, and a brief description explaining its relevance to the user's current context. Ensure the suggestions are not redundant with the current section if it's already a specific item (e.g., if on a specific course page, suggest related blog posts or other courses, not the exact same course).

The output should be a JSON array of objects, as described by the output schema.
`,
});

const aiContentSuggestionsFlow = ai.defineFlow(
  {
    name: 'aiContentSuggestionsFlow',
    inputSchema: AIContentSuggestionsInputSchema,
    outputSchema: AIContentSuggestionsOutputSchema,
  },
  async (input) => {
    const {output} = await contentSuggestionPrompt(input);
    return output!;
  }
);

export async function aiContentSuggestions(input: AIContentSuggestionsInput): Promise<AIContentSuggestionsOutput> {
  return aiContentSuggestionsFlow(input);
}
