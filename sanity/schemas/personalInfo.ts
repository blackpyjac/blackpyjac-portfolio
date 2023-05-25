import {defineField, defineType} from 'sanity'

export default defineType({
    name: "personalInfo",
    title: "PersonalInfo",
    type: "document",
    fields: [
      defineField({
        name: "name",
        title: "Name",
        type: "string",
      }),
      defineField({
        name: "heroImage",
        title: "Image",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "iconPage",
        title: "Web page Icon format ico",
        type: "file",
      }),
      defineField({
        name: "profilePic",
        title: "ProfilePic",
        type: "image",
        options: {
          hotspot: true,
        },
      }),
      defineField({
        name: "phoneNumber",
        title: "PhoneNumber",
        type: "string",
      }),
      defineField({
        name: "email",
        title: "Email",
        type: "string",
      }),
      defineField({
        name: "address",
        title: "Address",
        type: "string",
      }),
      defineField({
        name: "socials",
        title: "Socials",
        type: "array",
        of: [{ type: "reference", to: { type: "social" } }],
      }),
    ],
  });
  