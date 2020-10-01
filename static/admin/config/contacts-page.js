module.exports = {
    file: "src/pages/contacts.md",
    label: "Страница 'Контактная информация' / Contact Info Page",
    name: "contacts",
    fields: [
        {
            label: "Заголовок / Heading",
            name: "contactsHeading",
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
            label: "Метка поля номера телефона / Phone number field label",
            name: "contactsPhoneNumberLabel",
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
            label: "Номер телефона / Phone number",
            name: "contactsPhoneNumber",
            widget: "string",
        },
        {
            label: "Метка поля эл. почты / EMail field label",
            name: "contactsEmailLabel",
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
            label: "Адрес эл. почты / EMail",
            name: "contactsEmail",
            widget: "string",
        },
        {
            label: "Метка поля адреса / Address field label",
            name: "contactsAddressLabel",
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
            label: "Адрес / Address",
            name: "contactsAddress",
            widget: "string",
        },
    ],
}
