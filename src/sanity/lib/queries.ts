import { defineQuery } from 'next-sanity';

export const GROUPS_QUERY =
  defineQuery(`*[_type == "group" && defined(slug.current)][0...12]{
  _id, 
  fullName, 
  slug,
  shortName, 
  website, 
  blurb,
  groupPhoto,
  contactEmail,
  links[],
  activities[]
}`);

export const GROUP_QUERY =
  defineQuery(`*[_type == "group" && slug.current == $slug][0]{
  _id, name, slug
}`);

export const DEGROWTH_DEFINITIONS_QUERY =
  defineQuery(`*[_type == "degrowth-definition"]{
  _id, 
  statement, 
  quote,
  author, 
  identifier, 
  citationText,
  citationUrl,
}`);

export const EXT_RESOURCES_QUERY =
  defineQuery(`*[_type == "external-resource" && defined(slug.current)][0...12]{
  _id, name, slug, url
}`);

export const EXT_RESOURCE_QUERY =
  defineQuery(`*[_type == "external-resource" && slug.current == $slug][0]{
  _id, name, slug, url
}`);

export const W_CHATS_QUERY =
  defineQuery(`*[_type == "whatsapp-chat" && defined(slug.current)][0...12]{
  _id, name, slug
}`);

export const W_CHAT_QUERY =
  defineQuery(`*[_type == "whatsapp-chat" && slug.current == $slug][0]{
  _id, name, slug
}`);

export const PAGES_QUERY =
  defineQuery(`*[_type == "page" && defined(slug.current)][0...12]{
  _id, name, slug
}`);

export const PAGE_QUERY =
  defineQuery(`*[_type == "page" && slug.current == $slug][0]{
  _type, 
  _createdAt, 
  _updatedAt, 
  _rev,
  _id, 
  name, 
  slug, 
  title,
  pageBuilder[]{
    _key,
    _type,
    _type == "hero" => {
      heading,
      tagline,
      image
    },
    _type == "video" => {
      videoLabel,
      url,
    },
    _type == "richTextSection" => {
      title,
      content,
    },
    _type == "gallery" => {
      images[]{
        _key,
        ...,
      },
    },
  }
}`);
