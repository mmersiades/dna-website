import { defineField, defineType } from 'sanity';

// Type to represent a local Degrowth group
export const groupType = defineType({
  name: 'group',
  title: 'Group',
  type: 'document',
  description:
    'Data about local Degrowth groups to be displayed on a summary of the group on the DNA website',
  fields: [
    defineField({
      title: 'Full Name',
      name: 'fullName',
      type: 'string',
      description: 'The full / official name of the Degrowth group',
      validation: (rule) => rule.required().min(4).max(50),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'fullName',
        maxLength: 100, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\W+/g, '-').slice(0, 100),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Short Name',
      name: 'shortName',
      type: 'string',
      description: 'A shorter name or acronym for the group',
      validation: (rule) => rule.min(1).max(20),
    }),
    defineField({
      title: 'Website',
      name: 'website',
      type: 'url',
      description: "The group's website, if they have one",
      validation: (rule) =>
        rule.uri({
          scheme: 'https',
          allowCredentials: false,
          allowRelative: false,
          relativeOnly: false,
        }),
    }),
    defineField({
      title: 'Blurb',
      name: 'blurb',
      type: 'text',
      description: 'A short description/intro of the group',
      rows: 3,
      validation: (rule) => rule.required().min(20).max(400),
    }),
    defineField({
      title: 'Group Photo',
      name: 'groupPhoto',
      type: 'image',
      description: 'A photo of the group or image representing the group',
      options: {
        hotspot: true,
        accept: '.jpg,.png,.jpeg,.webp',
      },
    }),
    defineField({
      title: 'Contact email',
      name: 'contactEmail',
      type: 'email',
    }),
    defineField({
      title: 'Links',
      name: 'links',
      type: 'array',
      of: [{ type: 'groupLink' }],
    }),
    defineField({
      title: 'Activities',
      name: 'activities',
      type: 'array',
      of: [{ type: 'groupActivity' }],
    }),
  ],
});
