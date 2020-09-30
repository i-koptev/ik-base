module.exports = {
    file: "src/pages/site-settings.md",
    label: "Глобальные настройки / Global settings",
    name: "sitemetadata",
    fields: [
        {
            name: "title",
            widget: "hidden",
            default: "string",
        },
        {
            name: "templateKey",
            widget: "hidden",
            default: "meta-page",
        },
        {
            label: "Название сайта / Site name",
            name: "seoSiteTitle",
            widget: "object",
            hint: "Используется для брэндинга и как имя закладки",
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
            label: "SEO - Описание сайта / SEO - Site description",
            name: "seoSiteDescription",
            widget: "object",
            hint: "Используется для поля 'description' тэга 'meta'",
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
            label: "Body",
            name: "body",
            widget: "hidden",
        },
    ],
}
