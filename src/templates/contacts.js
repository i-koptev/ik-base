import React from "react"
import { graphql } from "gatsby"

import { injectIntl } from "gatsby-plugin-intl"

import MainLayout from "../layouts/Main"
import { ContactsPageView, DefaultPageView } from "../views"

const Contacts = (props) => {
    const { data, intl } = props

    const {
        markdownRemark: {
            frontmatter: {
                contactsPhoneNumber: phone,
                contactsEmail: email,
                contactsAddress: address,
            },
        },
    } = data

    const viewData = {
        email: email,
        phone: phone,
        address: address,
        header: intl.formatMessage({
            id: `contacts-page.contactsHeading`,
        }),
        emailLabel: intl.formatMessage({
            id: `contacts-page.contactsEmailLabel`,
        }),
        addressLabel: intl.formatMessage({
            id: `contacts-page.contactsAddressLabel`,
        }),
        phoneNumberLabel: intl.formatMessage({
            id: `contacts-page.contactsPhoneNumberLabel`,
        }),
    }

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>

            {/* <DefaultPageView {...props} /> */}
            <ContactsPageView {...viewData} />
        </MainLayout>
    )
}

export default injectIntl(Contacts)

export const pageQuery = graphql`
    query contactsPageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            frontmatter {
                contactsPhoneNumber
                contactsEmail
                contactsAddress
            }
        }
    }
`
