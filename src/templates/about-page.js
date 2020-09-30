import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import PageView from "../views/PageView"

const AboutPage = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            <PageView {...props} />
        </MainLayout>
    )
}

export default AboutPage

export const pageQuery = graphql`
    query aboutPage($slug: String!) {
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
