import { defineField, defineType } from 'sanity';

export const groupLinkType = defineType({
  name: 'groupLink',
  type: 'object',
  title: 'Group Link',
  fields: [
    defineField({
      title: 'Label',
      name: 'label',
      type: 'string',
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      title: 'Category',
      name: 'category',
      type: 'string',
      options: {
        list: [
          'facebook',
          'whatsapp',
          'instagram',
          'mailing-list',
          'matrix',
          'substack',
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      title: 'Url',
      name: 'url',
      type: 'url',
      description:
        'Enter url to Facebook page etc. Will not be displayed, but will be clickable',
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
  ],
});
