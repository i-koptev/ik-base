import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { ContactsPageView, DefaultPageView } from "../views"

const Contacts = (props) => {
    const { pageContext, data } = props

    const {
        markdownRemark: {
            frontmatter: {
                contactsPhoneNumber: phone,
                contactsEmail: email,
                contactsAddress: address,
            },
        },
    } = data

    const emailAddress = props.data.markdownRemark.frontmatter.contactsEmail
    return (
        <MainLayout>
            {/* <DefaultPageView {...props} /> */}
            <ContactsPageView email={email} phone={phone} address={address} />
        </MainLayout>
    )
}

export default Contacts

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
