import { ImageIcon, ImagesIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const imageGalleryType = defineType({
  name: 'gallery',
  type: 'object',
  title: 'Gallery',
  icon: ImagesIcon,
  fields: [
    {
      name: 'images',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        defineField({
          name: 'image',
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            },
          ],
        }),
      ],
      options: {
        layout: 'grid',
      },
    },
  ],
  preview: {
    select: {
      image: 'images',
    },
    prepare({ image }) {
      return {
        title: `${image.length} Images`,
        subtitle: 'Image Gallery',
        media: image[0] || ImageIcon,
      };
    },
  },
});
