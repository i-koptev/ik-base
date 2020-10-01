const { resolve } = require(`path`)
const fs = require("fs")
const showdown = require("showdown")
const { dd } = require("dumper.js")
const { dump } = require("dumper.js")

module.exports = async ({ actions, graphql }, options) => {
    const { intlTranslations, siteLanguages } = options

    const result = await graphql(`
        query contactsPageItems {
            markdownRemark(fields: { slug: { eq: "/contacts/" } }) {
                frontmatter {
                    contactsHeading {
                        ru
                        en
                    }
                    contactsPhoneNumberLabel {
                        ru
                        en
                    }
                    contactsPhoneNumber
                    contactsEmailLabel {
                        ru
                        en
                    }
                    contactsEmail
                    contactsAddressLabel {
                        en
                        ru
                    }
                    contactsAddress
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

    const contactsPageItems = result.data.markdownRemark
        ? result.data.markdownRemark.frontmatter
        : result.data.markdownRemark

    const featureNums = [1, 2, 3, 4]

    const converter = new showdown.Converter({ noHeaderId: true })

    if (contactsPageItems) {
        siteLanguages.map((language) => {
            if (contactsPageItems.contactsHeading) {
                intlTranslations[language][`contacts.contactsHeading`] =
                    contactsPageItems.contactsHeading[language]
            }
            if (contactsPageItems.contactsPhoneNumberLabel) {
                intlTranslations[language][
                    `contacts.contactsPhoneNumberLabel`
                ] = contactsPageItems.contactsPhoneNumberLabel[language]
            }
            if (contactsPageItems.contactsEmailLabel) {
                intlTranslations[language][`contacts.contactsEmailLabel`] =
                    contactsPageItems.contactsEmailLabel[language]
            }
            if (contactsPageItems.contactsAddressLabel) {
                intlTranslations[language][`contacts.contactsAddressLabel`] =
                    contactsPageItems.contactsAddressLabel[language]
            }
        })
    }
}
