import { defineField, defineType } from 'sanity';

export const groupActivityType = defineType({
  name: 'groupActivity',
  type: 'object',
  title: 'Group Activity',
  fields: [
    defineField({
      title: 'Activity Label',
      name: 'activityLabel',
      type: 'string',
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      title: 'Activity Url',
      name: 'activityUrl',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: 'https',
          allowCredentials: false,
          allowRelative: false,
          relativeOnly: false,
        }),
    }),
  ],
});
