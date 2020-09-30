module.exports = {
    file: "src/pages/sidebar-menu-settings.md",
    label: "Настройки бокового меню / Sidebar menu settings",
    name: "sidebarmenu",
    // summary: "Summary: '{{fields.quote}} - {{fields.author.name}}'"
    fields: [
        {
            label: "Menu item",
            name: "menuitem",
            widget: "list",
            fields: [
                { label: "Slug", name: "slug", widget: "string" },
                {
                    label: "Icon",
                    name: "icon",
                    widget: "select",
                    options: [
                        { label: "DashboardIcon", value: "DashboardIcon" },
                        { label: "PeopleIcon", value: "PeopleIcon" },
                        {
                            label: "ShoppingBasketIcon",
                            value: "ShoppingBasketIcon",
                        },
                        { label: "TextFieldsIcon", value: "TextFieldsIcon" },
                        { label: "ImageIcon", value: "ImageIcon" },
                        { label: "AccountBoxIcon", value: "AccountBoxIcon" },
                        { label: "SettingsIcon", value: "SettingsIcon" },
                        { label: "LockOpenIcon", value: "LockOpenIcon" },
                    ],
                },

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
