import { defineField, defineType } from 'sanity';

// Type to represent a local Degrowth group
export const externalResourceType = defineType({
  name: 'external-resource',
  title: 'External Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
});
