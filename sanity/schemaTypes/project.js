export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Project Title",
      type: "string",
      description: "The main title of the project.",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "priority",
      title: "Priority",
      type: "number",
      description:
        "Give a number to feature projects. Higher numbers appear first.",
      initialValue: 0,
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'The unique URL for this project. Click "Generate".',
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      description: "The main image shown on the projects list page.",
      options: {
        hotspot: true, // This allows for better image cropping
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "gallery",
      title: "Image Gallery",
      type: "array",
      description: "Upload all photos for the project showcase here.",
      of: [{ type: "image" }],
      options: {
        layout: "grid",
      },
    },
    {
      name: "description",
      title: "Description",
      type: "array", // An array allows for rich text
      of: [
        {
          type: "block", // This enables paragraphs, headings, etc.
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    },
  ],
  // This will make projects sort by priority by default in the admin panel
  orderings: [
    {
      title: "Priority, High to Low",
      name: "priorityDesc",
      by: [{ field: "priority", direction: "desc" }],
    },
  ],
};
