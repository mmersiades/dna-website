import { externalResourceType } from '@/sanity/schemaTypes/externalResourceType';
import { groupType } from '@/sanity/schemaTypes/groupType';
import { whatsAppChatType } from '@/sanity/schemaTypes/whatsAppChatType';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [groupType, externalResourceType, whatsAppChatType],
};
