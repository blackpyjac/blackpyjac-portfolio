import {defineField, defineType} from 'sanity'

export default defineType({
    name: "locales",
    title: "Locales",
    type: "document",
    fields: [
      defineField({
        name: "code",
        title: "Code",
        type: "string",
      }),
      defineField({
        name: "name",
        title: "Name",
        type: "string",
      }),
    ],
  });
  