const fs = require("fs")
const path = require("path")
const jsYaml = require("js-yaml")

const meta = require("./meta")
const globalSettings = require("./global-settings")
const topbarMenuSettings = require("./topbar-menu-settings")
const sidebarMenuSettings = require("./sidebar-menu-settings")
const frontPage = require("./front-page")
const aboutPage = require("./about-page")
const contactsPage = require("./contacts-page")
const productsPage = require("./products-page")

const productCategories = require("./product-categories")
const products = require("./products")

const russianToasts = require("./russian-toasts")
const englishToasts = require("./english-toasts")

// defining collections

const siteSettings = {
    name: "settings",
    label: "Настройки сайта / Site settings",
    files: [],
}
const pages = { name: "pages", label: "Страницы сайта / Pages ", files: [] }

siteSettings.files.push(globalSettings)
siteSettings.files.push(topbarMenuSettings)
siteSettings.files.push(sidebarMenuSettings)

pages.files.push(frontPage)
pages.files.push(aboutPage)
pages.files.push(contactsPage)
pages.files.push(productsPage)

meta.collections.push(siteSettings)
meta.collections.push(pages)
meta.collections.push(products)
meta.collections.push(productCategories)
// meta.collections.push(russianToasts)
// meta.collections.push(englishToasts)

const data = JSON.stringify(meta, null, 4)
const yamlData = jsYaml.dump(meta)

fs.writeFileSync(`${__dirname}/config.json`, data)
fs.writeFileSync(path.resolve(`${__dirname}/../config.yml`), yamlData)
