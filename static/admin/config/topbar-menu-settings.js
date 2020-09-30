module.exports = {
    file: "src/pages/topbar-menu-settings.md",
    label: "Настройки главного меню / Main menu settings",
    name: "sitemenu",
    // summary: "Summary: '{{fields.quote}} - {{fields.author.name}}'"
    fields: [
        {
            label: "Menu item",
            name: "menuitem",
            widget: "list",
            fields: [
                { label: "Slug", name: "slug", widget: "string" },

                {
                    label: "Title",
                    name: "title",
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
}
