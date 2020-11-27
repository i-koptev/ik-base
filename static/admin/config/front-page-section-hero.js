module.exports = {
    label: "Раздел Hero / Hero Section",
    name: "indexSectionHero",
    widget: "object",
    fields: [
        {
            label: "Image",
            name: "heroImage",
            widget: "image",
        },
        {
            label: "Заголовок / Heading",
            name: "heading",
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
            name: "subheading",
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
            label: "Преимущества / Features",
            name: "features",
            widget: "object",
            fields: [
                {
                    label: "Преимущество #1 / Feature #1",
                    name: "feature1",
                    widget: "object",
                    fields: [
                        {
                            label:
                                "Преимущество #1. Короткое описание / Feature #1. Short description",
                            name: "feature1shortdescription",
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
                            label:
                                "Преимущество #1. Развёрнутое описание / Feature #1. Detailed description",
                            name: "feature1detaileddescription",
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
                    ],
                },
                {
                    label: "Преимущество #2 / Feature #2",
                    name: "feature2",
                    widget: "object",
                    fields: [
                        {
                            label:
                                "Преимущество #2. Короткое описание / Feature #2. Short description",
                            name: "feature2shortdescription",
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
                            label:
                                "Преимущество #2. Развёрнутое описание / Feature #2. Detailed description",
                            name: "feature2detaileddescription",
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
                    ],
                },
                {
                    label: "Преимущество #3 / Feature #3",
                    name: "feature3",
                    widget: "object",
                    fields: [
                        {
                            label:
                                "Преимущество #3. Короткое описание / Feature #3. Short description",
                            name: "feature3shortdescription",
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
                            label:
                                "Преимущество #3. Развёрнутое описание / Feature #3. Detailed description",
                            name: "feature3detaileddescription",
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
                    ],
                },
                {
                    label: "Преимущество #4 / Feature #4",
                    name: "feature4",
                    widget: "object",
                    fields: [
                        {
                            label:
                                "Преимущество #4. Короткое описание / Feature #4. Short description",
                            name: "feature4shortdescription",
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
                            label:
                                "Преимущество #4. Развёрнутое описание / Feature #4. Detailed description",
                            name: "feature4detaileddescription",
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
                    ],
                },
            ],
        },
    ],
}
