export default {
    name: "character",
    title: "Character",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "opening",
            title: "Opening Chat",
            type: "string",
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "description",
            title: "Description",
            type: "text"
        },
        {
            name: "topics",
            title: "Topics",
            type: "array",
            of: [{ type: "reference", to: { type: "topic" } }],
        },
        {
            name: "profession",
            title: "Profession",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
    ],
};