import { defineQuery } from 'next-sanity';

export const GROUPS_QUERY =
  defineQuery(`*[_type == "group" && defined(slug.current)][0...12]{
  _id, name, slug
}`);

export const GROUP_QUERY =
  defineQuery(`*[_type == "group" && slug.current == $slug][0]{
  _id, name, slug
}`);

export const EXT_RESOURCES_QUERY =
  defineQuery(`*[_type == "external-resource" && defined(slug.current)][0...12]{
  _id, name, slug
}`);

export const EXT_RESOURCE_QUERY =
  defineQuery(`*[_type == "external-resource" && slug.current == $slug][0]{
  _id, name, slug
}`);

export const W_CHATS_QUERY =
  defineQuery(`*[_type == "whatsapp-chat" && defined(slug.current)][0...12]{
  _id, name, slug
}`);

export const W_CHAT_QUERY =
  defineQuery(`*[_type == "whatsapp-chat" && slug.current == $slug][0]{
  _id, name, slug
}`);
