import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { ContactsPageView, DefaultPageView } from "../views"

const About = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            <DefaultPageView {...props} />
        </MainLayout>
    )
}

export default About

export const pageQuery = graphql`
    query aboutPageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            fields {
                slug
            }
            frontmatter {
                aboutText {
                    en
                    ru
                }
            }
        }
    }
`
