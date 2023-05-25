import {defineField, defineType} from 'sanity'

export default defineType({
    name: "pageInfo",
    title: "PageInfo",
    type: "document",
    fields: [
      defineField({
        name: "locale",
        title: "Locale",
        type: "reference",
        to: [{ type: "locales" }],
      }),
      defineField({
        name: "role",
        title: "Role",
        type: "string",
      }),
      defineField({
        name: "backgroundInformation",
        title: "BackgroundInformation",
        type: "string",
      }),
    ],
  });
  