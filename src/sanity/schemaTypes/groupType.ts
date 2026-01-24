import { defineField, defineType } from 'sanity';

// Type to represent a local Degrowth group
export const groupType = defineType({
  name: 'group',
  title: 'Group',
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
  ],
});
