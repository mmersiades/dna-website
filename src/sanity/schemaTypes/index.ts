import { externalResourceType } from '@/sanity/schemaTypes/contentModels/externalResourceType';
import { groupActivityType } from '@/sanity/schemaTypes/contentModels/groupActivityType';
import { groupLinkType } from '@/sanity/schemaTypes/contentModels/groupLinkType';
import { groupType } from '@/sanity/schemaTypes/contentModels/groupType';
import { whatsAppChatType } from '@/sanity/schemaTypes/contentModels/whatsAppChatType';
import { blockContentType } from '@/sanity/schemaTypes/pageBuilder/blockContentType';
import { callToActionType } from '@/sanity/schemaTypes/pageBuilder/callToActionType';
import { heroType } from '@/sanity/schemaTypes/pageBuilder/heroType';
import { imageGalleryType } from '@/sanity/schemaTypes/pageBuilder/imageGalleryType';
import { pageType } from '@/sanity/schemaTypes/pageBuilder/pageType';
import { richTextContentType } from '@/sanity/schemaTypes/pageBuilder/richTextContentType';
import { textWithIllustrationType } from '@/sanity/schemaTypes/pageBuilder/textWithIllustration';
import { videoType } from '@/sanity/schemaTypes/pageBuilder/videoType';
import { type SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Content models
    groupType,
    groupLinkType,
    groupActivityType,
    externalResourceType,
    whatsAppChatType,
    // Page builder
    pageType,
    callToActionType,
    heroType,
    imageGalleryType,
    textWithIllustrationType,
    videoType,
    blockContentType,
    richTextContentType,
  ],
};
