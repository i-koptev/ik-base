const { resolve } = require(`path`)
const showdown = require("showdown")
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
                        featuredImageObject {
                            featuredImage {
                                id
                            }
                            featuredImageAlt {
                                en
                                ru
                            }
                        }
                        productCardImages {
                            image1Object {
                                image1 {
                                    id
                                }
                                image1Alt {
                                    ru
                                    en
                                }
                            }
                            image2Object {
                                image2 {
                                    id
                                }
                                image2Alt {
                                    ru
                                    en
                                }
                            }
                            image3Object {
                                image3 {
                                    id
                                }
                                image3Alt {
                                    ru
                                    en
                                }
                            }
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

    const converter = new showdown.Converter({ noHeaderId: true })

    if (allProductsItems) {
        siteLanguages.map((language) => {
            allProductsItems.forEach((productItem) => {
                intlTranslations[language][
                    `${productItem.id}.productShortDescription`
                ] = productItem.frontmatter.productShortDescription[language]

                intlTranslations[language][
                    `${productItem.id}.productDescription`
                ] = converter.makeHtml(
                    productItem.frontmatter.productDescription[language]
                )

                intlTranslations[language][
                    `${productItem.id}.featuredImageAlt`
                ] =
                    productItem.frontmatter.featuredImageObject.featuredImageAlt[
                        language
                    ]

                intlTranslations[language][
                    `${productItem.id}.productCardImage1Alt`
                ] =
                    productItem.frontmatter.productCardImages.image1Object.image1Alt[
                        language
                    ]

                intlTranslations[language][
                    `${productItem.id}.productCardImage2Alt`
                ] =
                    productItem.frontmatter.productCardImages.image2Object.image2Alt[
                        language
                    ]

                intlTranslations[language][
                    `${productItem.id}.productCardImage3Alt`
                ] =
                    productItem.frontmatter.productCardImages.image3Object.image3Alt[
                        language
                    ]
            })
        })
    }
}
