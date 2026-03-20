import { defineField, defineType } from 'sanity';

// Type to represent a description of Degrowth, to be used on the landing page
export const degrowthDescriptionType = defineType({
  name: 'degrowth-definition',
  title: 'Degrowth Description',
  type: 'document',
  fields: [
    defineField({
      title: 'Description Heading',
      name: 'statement',
      type: 'string',
      description: `A 1-3 word summary of the description/quote, typically no more than 30 characters.
      It completes the sentence: "Degrowth is...". Examples:
      
      - "a movement."
      - "an academic field."
      - "not a recession."
      - "planned."
      - "about decisions."
      `,
      validation: (rule) => rule.required().max(25),
    }),
    defineField({
      title: 'Description',
      name: 'quote',
      type: 'text',
      description: `A short description of the Degrowth. 1 - 2 sentences, max 300 characters`,
      validation: (rule) => rule.required().max(300),
    }),
    defineField({
      title: 'Author',
      name: 'author',
      type: 'string',
      description: `The author of the description/quote. Max 50 characters.
      
      If the quote comes from a publication, write name(s) and year, like:
      
      "Martin Weiss & Claudio Cattaneo, 2017" 
      `,
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      title: 'Identifier',
      name: 'identifier',
      type: 'string',
      description: `If the quote/description is NOT from a publication, write a few words that describe the author's identity.
      
      The goal here is to demonstrate the diversity of the Degrowth movement. Examples:
      
      - "Mother of two"
      - "Journalist"
      - "Mad Liverpool supporter"
      `,
      validation: (rule) => rule.max(30),
    }),
    defineField({
      title: 'Citation',
      name: 'citationText',
      type: 'string',
      description: `If the quote/description comes from a publication, provide an APA-style citation`,
      validation: (rule) => rule.max(150),
    }),
    defineField({
      title: 'Citation Link',
      name: 'citationUrl',
      type: 'url',
      description: `If the quote/description comes from a publication, a url to the publication`,
      validation: (rule) =>
        rule.uri({
          scheme: 'https',
          allowCredentials: false,
          allowRelative: false,
          relativeOnly: false,
        }),
    }),
  ],
});
