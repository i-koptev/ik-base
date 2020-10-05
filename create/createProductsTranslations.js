const { resolve } = require(`path`)
const fs = require("fs")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query allProductsItems {
            allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "product-item" } } }
            ) {
                nodes {
                    id
                    frontmatter {
                        productShortDescription {
                            en
                            ru
                        }
                        productDescription {
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
            "Error while running allProductsItems GraphQL query.",
            result.errors
        )
        return
    }

    const allProductsItems = result.data.allMarkdownRemark
        ? result.data.allMarkdownRemark.nodes
        : result.data.allMarkdownRemark

    if (allProductsItems) {
        siteLanguages.map((language) => {
            allProductsItems.forEach((productItem) => {
                intlTranslations[language][
                    `${productItem.id}.productShortDescription`
                ] = productItem.frontmatter.productShortDescription[language]
            })
            allProductsItems.forEach((productItem) => {
                intlTranslations[language][
                    `${productItem.id}.productDescription`
                ] = productItem.frontmatter.productDescription[language]
            })
        })
    }
}
