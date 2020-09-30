const { resolve } = require(`path`)
const fs = require("fs")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query allSidebarMenuItems {
            markdownRemark(
                fields: { slug: { eq: "/sidebar-menu-settings/" } }
            ) {
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

    const allSidebarMenuItems = result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter.menuitem
        : result.data.markdownRemark

    if (allSidebarMenuItems) {
        siteLanguages.map((language) => {
            allSidebarMenuItems.forEach((menuItem) => {
                intlTranslations[language][
                    `sidebarMenu.${menuItem.slug.replace(/\//g, "")}.title`
                ] = menuItem.title[language]
            })
        })
    }
}
