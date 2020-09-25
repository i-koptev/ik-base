const fs = require("fs")
const path = require("path")
const jsYaml = require("js-yaml")

const meta = require("./meta")
const frontPage = require("./front-page")
const aboutPage = require("./about-page")

const russianToasts = require("./russian-toasts")
const englishToasts = require("./english-toasts")

const pages = { name: "pages", label: "Страницы сайта / Pages ", files: [] }

pages.files.push(frontPage)
pages.files.push(aboutPage)

meta.collections.push(pages)
// meta.collections.push(russianToasts)
// meta.collections.push(englishToasts)

const data = JSON.stringify(meta, null, 4)
const yamlData = jsYaml.dump(meta)

fs.writeFileSync(`${__dirname}/config.json`, data)
fs.writeFileSync(path.resolve(`${__dirname}/../config.yml`), yamlData)
