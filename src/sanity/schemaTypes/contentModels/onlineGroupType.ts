import { defineField, defineType } from 'sanity';

export const onlineGroupType = defineType({
  name: 'online-group',
  title: 'Online Group',
  type: 'document',
  description: `A national-level online group, such as a learning circle or working group`,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string', // Type must be string
      options: {
        list: [
          { title: 'Learning Circle', value: 'learning-circle' },
          { title: 'Working Group', value: 'working-group' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'meetingFrequency',
      title: 'Meeting Frequency',
      type: 'string', // Type must be string
      options: {
        list: [
          { title: 'Weekly', value: 'Weekly' },
          { title: 'Fortnightly', value: 'Fortnightly' },
          { title: 'Monthly', value: 'Monthly' },
          { title: 'Quarterly', value: 'Quarterly' },
          { title: 'Varies', value: 'Varies' },
        ],
      },
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
        rule.uri({
          scheme: 'https',
          allowCredentials: false,
          allowRelative: false,
          relativeOnly: false,
        }),
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          validation: (rule) =>
            rule.custom((value, context) => {
              const parent = context?.parent as { asset?: { _ref?: string } };

              return !value && parent?.asset?._ref
                ? 'Alt text is required when an image is present'
                : true;
            }),
        }),
      ],
    }),
  ],
});
