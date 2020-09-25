module.exports = {
    name: "russian_toasts",
    label: "Тосты по-русски",
    folder: "src/pages/toasts",
    extension: "ru.md",
    format: "frontmatter",
    create: true,
    filter: {
        field: "language",
        value: "ru",
    },
    fields: [
        {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "dumb",
        },
        {
            label: "Язык",
            name: "language",
            widget: "select",
            options: ["en", "ru"],
        },
        {
            label: "Название",
            name: "title",
            widget: "string",
        },
        {
            label: "Содержимое",
            name: "body",
            widget: "markdown",
        },
    ],
}
