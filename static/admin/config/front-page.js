module.exports = {
    file: "src/pages/front-page.md",
    label: "Главная страница / Front Page",
    name: "front-page",
    fields: [
        {
            label: "Идентификатор страницы / Page identifier",
            name: "title",
            widget: "string",
            hint: "Главная страница / Front Page",
        },
        {
            label: "Template Key",
            name: "templateKey",
            widget: "string",
        },
        {
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
        },
        {
            label: "Раздел Intro / Intro Section",
            name: "indexSectionIntro",
            widget: "object",
            fields: [
                {
                    label: "Фоновое изображение / Background Image",
                    name: "introBgImage",
                    widget: "image",
                },
                {
                    label: "Блок раздела / Section Block",
                    hint: "Блок состоит из  'выезжающих' изображения и текста",
                    name: "introBlock",
                    widget: "list",
                    fields: [
                        {
                            label: "Изображение блока / Block Image",
                            name: "introBlockImage",
                            widget: "image",
                        },
                        {
                            label: "Текст ALT изображения / Image ALT Text",
                            name: "introBlockImageALT",
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
                        {
                            label: "Расположение изображения / Image Position",
                            name: "imagePosition",
                            widget: "select",
                            options: [
                                {
                                    label: "Изображение слева / Image to left",
                                    value: "left",
                                },
                                {
                                    label:
                                        "Изображение справа / Image to right",
                                    value: "right",
                                },
                            ],
                        },
                        {
                            label: "Текст блока / Block Text",
                            name: "introBlockText",
                            widget: "object",
                            fields: [
                                {
                                    label: "RU",
                                    name: "ru",
                                    widget: "markdown",
                                },
                                {
                                    label: "EN",
                                    name: "en",
                                    widget: "markdown",
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