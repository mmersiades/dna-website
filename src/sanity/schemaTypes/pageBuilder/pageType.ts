import { defineArrayMember, defineField, defineType } from 'sanity';

export const pageType = defineType({
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({
      name: 'slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageBuilder',
      type: 'array',
      title: 'Page builder',
      validation: (Rule) => Rule.required(),
      of: [
        defineArrayMember({
          name: 'hero',
          type: 'hero',
        }),
        defineArrayMember({
          name: 'richTextSection',
          type: 'richTextSection',
        }),
        defineArrayMember({
          name: 'gallery',
          type: 'gallery',
        }),
        defineArrayMember({
          name: 'video',
          type: 'video',
        }),
        defineArrayMember({
          name: 'callToAction',
          type: 'reference',
          to: [{ type: 'promotion' }],
        }),
      ],
      options: {
        insertMenu: {
          // filter: true,
          // groups: [
          //   {
          //     name: 'landing',
          //     title: 'Landing Page',
          //     of: ['hero', 'promotion', 'form'],
          //   },
          //   {
          //     name: 'promotions',
          //     title: 'Promotions',
          //     of: ['gallery', 'video', 'promotion'],
          //   },
          //   {
          //     name: 'blackFriday',
          //     title: 'Black Friday',
          //     of: ['textWithIllustration', 'gallery', 'video'],
          //   },
          // ],
          views: [
            { name: 'list' },
            {
              name: 'grid',
              previewImageUrl: (schemaTypeName) =>
                `/static/preview-${schemaTypeName}.jpg`,
            },
          ],
        },
      },
    }),
  ],
});
