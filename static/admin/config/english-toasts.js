module.exports = {
    name: "english_toasts",
    label: "Toasts in English",
    folder: "src/pages/toasts",
    extension: "en.md",
    format: "frontmatter",
    create: true,
    filter: {
        field: "language",
        value: "en",
    },
    fields: [
        {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "dumb",
        },
        {
            label: "Language",
            name: "language",
            widget: "select",
            options: ["en", "ru"],
        },
        {
            label: "Title",
            name: "title",
            widget: "string",
        },
        {
            label: "Content",
            name: "body",
            widget: "markdown",
        },
    ],
}
