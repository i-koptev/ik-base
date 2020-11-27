module.exports = {
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
                            label: "Изображение справа / Image to right",
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
}
