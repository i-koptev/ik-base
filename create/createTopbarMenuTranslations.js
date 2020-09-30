const { resolve } = require(`path`)
const fs = require("fs")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query allTopbarMenuItems {
            markdownRemark(fields: { slug: { eq: "/topbar-menu-settings/" } }) {
                frontmatter {
                    menuitem {
                        slug
                        title {
                            en
                            ru
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        // reporter.panicOnBuild(`Error while running GraphQL query.`);
        reporter.panic(
            "Error while running allTopbarMenuItems GraphQL query.",
            result.errors
        )
        return
    }

    const allTopbarMenuItems = result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter.menuitem
        : result.data.markdownRemark

    if (allTopbarMenuItems) {
        siteLanguages.map((language) => {
            allTopbarMenuItems.forEach((menuItem) => {
                intlTranslations[language][
                    `topbarMenu.${menuItem.slug.replace(/\//g, "")}.title`
                ] = menuItem.title[language]
            })
        })
    }
}
