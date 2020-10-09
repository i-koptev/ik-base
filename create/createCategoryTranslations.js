const { resolve } = require(`path`)
const fs = require("fs")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query allCategoryItems {
            allMarkdownRemark(
                filter: {
                    frontmatter: { templateKey: { eq: "category-item" } }
                }
            ) {
                nodes {
                    frontmatter {
                        categoryId
                        categoryName {
                            ru
                            en
                        }
                    }
                }
            }
        }
    `)

    if (result.errors) {
        // reporter.panicOnBuild(`Error while running GraphQL query.`);
        reporter.panic(
            "Error while running allCategoryItems GraphQL query.",
            result.errors
        )
        return
    }

    const allCategoryItems = result.data.allMarkdownRemark
        ? result.data.allMarkdownRemark.nodes
        : result.data.allMarkdownRemark

    if (allCategoryItems) {
        siteLanguages.map((language) => {
            allCategoryItems.forEach((categoryItem) => {
                intlTranslations[language][
                    `category.${categoryItem.frontmatter.categoryId}`
                ] = categoryItem.frontmatter.categoryName[language]
            })
        })
    }
}
