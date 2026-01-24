import { defineField, defineType } from 'sanity';

// Type to represent a local Degrowth group
export const whatsAppChatType = defineType({
  name: 'whatsapp-chat',
  title: 'WhatsApp Chat',
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
