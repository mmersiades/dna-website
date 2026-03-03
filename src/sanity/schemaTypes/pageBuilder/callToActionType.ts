import { LinkIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const callToActionType = defineType({
  name: 'callToAction',
  type: 'object',
  title: 'Call To Action Link',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'link',
      type: 'url',
    }),
  ],
});
