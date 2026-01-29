import { VideoIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const videoType = defineType({
  name: 'video',
  type: 'object',
  icon: VideoIcon,
  fields: [
    defineField({
      name: 'videoLabel',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'string',
      title: 'URL',
    }),
  ],
  preview: {
    select: {
      title: 'videoLabel',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled',
        subtitle: 'Video',
        media: VideoIcon,
      };
    },
  },
});
