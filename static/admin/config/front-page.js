const sectionHero = require("./front-page-section-hero")
const sectionTeam = require("./front-page-section-team")
const sectionIntro = require("./front-page-section-intro")

const frontPage = {
    file: "src/pages/front-page.md",
    label: "Главная страница / Front Page",
    name: "front-page",
    fields: [
        {
            label: "Body",
            name: "body",
            widget: "hidden",
        },
    ],
}

frontPage.fields.push(sectionHero)
frontPage.fields.push(sectionTeam)
frontPage.fields.push(sectionIntro)

module.exports = frontPage
