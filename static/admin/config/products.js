module.exports = {
    name: "products",
    label: "Товары / Products",
    folder: "src/pages/products",
    create: true,
    slug: "{{fields.productCategory}}-REPLACEBYSLASH-{{slug}}",
    fields: [
        {
            label: "Template Key",
            name: "templateKey",
            widget: "hidden",
            default: "product-item",
        },
        {
            label: "Модель товара (Слаг) / Product model (Slug)",
            name: "title",
            widget: "string",
        },
        {
            label: "Категория товара / Product Category",
            name: "productCategory",
            widget: "relation",
            collection: "categories",
            displayFields: ["categoryName.en", "categoryName.ru"],
            searchFields: ["categoryName.en", "categoryName.ru"],
            valueField: "categoryId",
        },
        {
            label: "Краткое описание товара / SEO / Short Product Description",
            name: "productShortDescription",
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
            label: "Описание товара / Product Description",
            name: "productDescription",
            widget: "object",
            fields: [
                {
                    label: "ru",
                    name: "ru",
                    widget: "markdown",
                },
                {
                    label: "en",
                    name: "en",
                    widget: "markdown",
                },
            ],
        },
        {
            label: "Цена / Price",
            name: "price",
            widget: "number",
            value_type: "float",
            min: 0,
            max: 10000,
        },
        {
            label: "Featured Product",
            name: "featuredproduct",
            widget: "boolean",
            default: "false",
        },
        {
            label: "Презентационное изображение / Featured Image",
            name: "featuredImageObject",
            widget: "object",
            fields: [
                {
                    label: "Изображение / Image",
                    name: "featuredImage",
                    widget: "image",
                },
                {
                    label: "Alt - текст изображения / Image Alt Text",
                    name: "featuredImageAlt",
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
        },

        {
            label: " Изображения для карточки товара / Product card images",
            name: "productCardImages",
            widget: "object",
            fields: [
                {
                    label: "Изображение #1 / Image #1",
                    name: "image1Object",
                    widget: "object",
                    fields: [
                        {
                            label: "Изображение / Image",
                            name: "image1",
                            widget: "image",
                        },
                        {
                            label: "Alt - текст изображения / Image Alt Text",
                            name: "image1Alt",
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
                },
                {
                    label: "Изображение #2 / Image #2",
                    name: "image2Object",
                    widget: "object",
                    fields: [
                        {
                            label: "Изображение / Image",
                            name: "image2",
                            widget: "image",
                        },
                        {
                            label: "Alt - текст изображения / Image Alt Text",
                            name: "image2Alt",
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
                },
                {
                    label: "Изображение #3 / Image #3",
                    name: "image3Object",
                    widget: "object",
                    fields: [
                        {
                            label: "Изображение / Image",
                            name: "image3",
                            widget: "image",
                        },
                        {
                            label: "Alt - текст изображения / Image Alt Text",
                            name: "image3Alt",
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
                },
            ],
        },
        {
            label: "Body",
            name: "body",
            widget: "hidden",
        },
    ],
}
