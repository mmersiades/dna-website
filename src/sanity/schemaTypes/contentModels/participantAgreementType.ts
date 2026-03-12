import { defineField, defineType } from 'sanity';

export const participantAgreementType = defineType({
  name: 'participantAgreement',
  title: 'Participant Agreement',
  type: 'document',
  fields: [
    defineField({
      name: 'version',
      title: 'Agreement Version',
      type: 'number',
      validation: (Rule) =>
        Rule.custom((value) => {
          if (!value) return 'Agreement version is required';

          if (value <= 0) {
            return 'Agreement version must be a positive number';
          }

          return true;
        }).required(),
    }),
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
