const { resolve } = require(`path`)
const fs = require("fs")
const showdown = require("showdown")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query frontPageItems {
            markdownRemark(fields: { slug: { eq: "/front-page/" } }) {
                frontmatter {
                    indexSectionHero {
                        heading {
                            en
                            ru
                        }
                        subheading {
                            en
                            ru
                        }
                        features {
                            feature1 {
                                feature1detaileddescription {
                                    en
                                    ru
                                }
                                feature1shortdescription {
                                    en
                                    ru
                                }
                            }
                            feature2 {
                                feature2detaileddescription {
                                    en
                                    ru
                                }
                                feature2shortdescription {
                                    en
                                    ru
                                }
                            }
                            feature3 {
                                feature3detaileddescription {
                                    en
                                    ru
                                }
                                feature3shortdescription {
                                    en
                                    ru
                                }
                            }
                            feature4 {
                                feature4detaileddescription {
                                    en
                                    ru
                                }
                                feature4shortdescription {
                                    en
                                    ru
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
            "Error while running frontPageItems GraphQL query.",
            result.errors
        )
        return
    }

    const frontPageItemsFrontmatter = result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter
        : result.data.markdownRemark

    const featureNums = [1, 2, 3, 4]

    const converter = new showdown.Converter({ noHeaderId: true })

    if (frontPageItemsFrontmatter) {
        if (frontPageItemsFrontmatter.indexSectionHero) {
            siteLanguages.map((language) => {
                intlTranslations[language][`front-page.sectionHero.heading`] =
                    frontPageItemsFrontmatter.indexSectionHero.heading[language]
                intlTranslations[language][
                    `front-page.sectionHero.subheading`
                ] =
                    frontPageItemsFrontmatter.indexSectionHero.subheading[
                        language
                    ]

                featureNums.map((i) => {
                    intlTranslations[language][
                        `front-page.sectionHero.features.feature${i}.feature${i}shortdescription`
                    ] =
                        frontPageItemsFrontmatter.indexSectionHero.features[
                            `feature${i}`
                        ][`feature${i}shortdescription`][language]
                    intlTranslations[language][
                        `front-page.sectionHero.features.feature${i}.feature${i}detaileddescription`
                    ] = converter.makeHtml(
                        frontPageItemsFrontmatter.indexSectionHero.features[
                            `feature${i}`
                        ][`feature${i}detaileddescription`][language]
                    )
                })
            })
        }
    }
}
