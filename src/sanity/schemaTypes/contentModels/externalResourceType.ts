import { defineField, defineType } from 'sanity';

// Type to represent an external resource to be listed as a link
// Fields are based on Open Graph tags
// Recommended to use https://orcascan.com/tools/open-graph-validator to get the
// site's open graph data for these fields.
export const externalResourceType = defineType({
  name: 'external-resource',
  title: 'External Resource',
  type: 'document',
  description: `A link to an external resource with Open Graph data
  Recommended to use https://orcascan.com/tools/open-graph-validator to get the
  site's open graph data for these fields
  `,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) =>
        rule
          .uri({
            scheme: 'https',
            allowCredentials: false,
            allowRelative: false,
            relativeOnly: false,
          })
          .required(),
    }),
    defineField({
      name: 'image',
      type: 'url',
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
