module.exports = {
    file: "src/pages/products.md",
    label: "Страница 'Товары' / Products Page",
    name: "products-page",
    fields: [
        {
            label: "Заголовок / Heading",
            name: "productsHeading",
            widget: "object",
            fields: [
                {
                    label: "ru",
                    name: "ru",
                    widget: "string",
                },
                {
                    label: "en",
                    name: "en",
                    widget: "string",
                },
            ],
        },
        {
            label: "Подзаголовок / Subheading",
            name: "productsSubheading",
            widget: "object",
            fields: [
                {
                    label: "ru",
                    name: "ru",
                    widget: "string",
                },
                {
                    label: "en",
                    name: "en",
                    widget: "string",
                },
            ],
        },
    ],
}
