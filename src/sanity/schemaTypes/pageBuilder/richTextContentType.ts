import { BlockContentIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const richTextContentType = defineType({
  name: 'richTextSection',
  type: 'object',
  title: 'Rich Text',
  icon: BlockContentIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Rich Text',
        media: BlockContentIcon,
      };
    },
  },
});
