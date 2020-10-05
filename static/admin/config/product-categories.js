module.exports = {
    name: "categories",
    label: "Категории товаров / Product Categories",
    folder: "src/pages/products/categories",
    create: true,
    slug: "{{slug}}",
    fields: [
        {
            name: "templateKey",
            widget: "hidden",
            default: "category-page",
        },
        {
            label: "Имя в файловой системе",
            name: "title",
            widget: "string",
            hint: "Лучше присвоить такое же как у Идентификатора категории",
        },
        {
            label: "Идентификатор категории / Category identifier",
            name: "categoryId",
            widget: "string",
        },
        {
            label: "Наименование категории / Category name",
            name: "categoryName",
            widget: "object",
            fields: [
                {
                    label: "RU",
                    name: "ru",
                    widget: "string",
                },
                {
                    label: "EN",
                    name: "en",
                    widget: "string",
                },
            ],
        },
    ],
}
