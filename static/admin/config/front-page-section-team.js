module.exports = {
    label: "Раздел Команда / Team Section",
    name: "indexSectionTeam",
    widget: "object",
    fields: [
        {
            label: "Фоновое изображение / Background Image",
            name: "teamBgImage",
            widget: "image",
        },
        {
            label: "Член команды / Team member",
            hint: "Просто добавь члена в команду...",
            name: "teamMember",
            widget: "list",
            fields: [
                {
                    label: "Фото / Image",
                    name: "teamMemberImage",
                    widget: "image",
                },
                {
                    label: "Текст ALT изображения / Image ALT Text",
                    name: "teamMemberImageALT",
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
                    label: "Имя / First Name",
                    name: "firstName",
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
                    label: "Фамилия / Second Name",
                    name: "secondName",
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
                    label: "Отдел / Department",
                    name: "department",
                    widget: "select",
                    options: [
                        {
                            label: "Разработка / Development",
                            value: "development",
                        },
                        {
                            label: "Менеджмент / Management",
                            value: "management",
                        },
                        {
                            label: "Бухгалтерия / Accountancy",
                            value: "accountancy",
                        },
                    ],
                },
                {
                    label: "Должность / Position",
                    name: "teamMemeberPosition",
                    widget: "select",
                    options: [
                        {
                            label: "Дизайнер / Designer",
                            value: "designer",
                        },
                        {
                            label: "Программист / Programmer",
                            value: "programmer",
                        },
                        {
                            label: "Менеджер / Manager",
                            value: "manager",
                        },
                        {
                            label: "Бухгалтер / Accountant",
                            value: "accountant",
                        },
                    ],
                },
                {
                    label: "Инфо о члене / Member info",
                    name: "teamMemeberInfo",
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
                {
                    label: "Facebook",
                    name: "facebookAddress",
                    widget: "string",
                },
                {
                    label: "Twitter",
                    name: "twitterAddress",
                    widget: "string",
                },
                {
                    label: "Instagram",
                    name: "instagramAddress",
                    widget: "string",
                },
            ],
        },
    ],
}
