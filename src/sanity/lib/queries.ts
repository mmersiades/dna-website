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

export const EXT_RESOURCES_QUERY = defineQuery(`*[_type == "external-resource"]{
  _id,
  title,
  category,
  description,
  url,
  image,
  logo
}`);

export const ONLINE_GROUPS_QUERY = defineQuery(`*[_type == "online-group"]{
  _id,
  title,
  category,
  meetingFrequency,
  description,
  url,
  image
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
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "image": seo.image,
    "noIndex": seo.noIndex == true
  },
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
