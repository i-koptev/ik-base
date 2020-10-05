const showdown = require("showdown")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query aboutPageItems {
            markdownRemark(fields: { slug: { eq: "/about/" } }) {
                frontmatter {
                    aboutHeading {
                        ru
                        en
                    }
                    aboutSubheading {
                        ru
                        en
                    }
                    aboutText {
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

    const aboutPageItems = !!result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter
        : !!result.data.markdownRemark

    const converter = new showdown.Converter({ noHeaderId: true })

    if (aboutPageItems) {
        siteLanguages.map((language) => {
            if (!!aboutPageItems.aboutHeading) {
                intlTranslations[language][`about-page.aboutHeading`] =
                    aboutPageItems.aboutHeading[language]
            }
            if (!!aboutPageItems.aboutSubheading) {
                intlTranslations[language][`about-page.aboutSubheading`] =
                    aboutPageItems.aboutSubheading[language]
            }

            if (!!aboutPageItems.aboutText) {
                intlTranslations[language][
                    `about-page.aboutText`
                ] = converter.makeHtml(aboutPageItems.aboutText[language])
            }
        })
    }
}
