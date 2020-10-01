module.exports = {
    file: "src/pages/about.md",
    label: "Страница 'О нас' / About Page",
    name: "about-page",
    fields: [
        {
            label: "Язык выводимых данных / Output language",
            name: "adminlang",
            widget: "select",
            options: [
                {
                    label: "По Русски",
                    value: "ru",
                },
                {
                    label: "In English",
                    value: "en",
                },
            ],
        },
        {
            label: "Заголовок / Heading",
            name: "aboutHeading",
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
            name: "aboutSubheading",
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
            label: "О нас / About Us",
            name: "aboutText",
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
}
