const { resolve } = require(`path`)
const fs = require("fs")
const showdown = require("showdown")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query productsPageItems {
            markdownRemark(fields: { slug: { eq: "/products/" } }) {
                frontmatter {
                    productsHeading {
                        ru
                        en
                    }
                    productsSubheading {
                        ru
                        en
                    }
                }
            }
        }
    `)

    if (result.errors) {
        // reporter.panicOnBuild(`Error while running GraphQL query.`);
        reporter.panic(
            "Error while running frontPageItems GraphQL query.",
            result.errors
        )
        return
    }

    const productsPageItems = result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter
        : result.data.markdownRemark

    const converter = new showdown.Converter({ noHeaderId: true })

    if (productsPageItems) {
        siteLanguages.map((language) => {
            if (productsPageItems.productsHeading) {
                intlTranslations[language][`products-page.productsHeading`] =
                    productsPageItems.productsHeading[language]
            }
            if (productsPageItems.productsSubheading) {
                intlTranslations[language][`products-page.productsSubheading`] =
                    productsPageItems.productsSubheading[language]
            }
        })
    }
}
