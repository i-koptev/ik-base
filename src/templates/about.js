import React from "react"
import { graphql } from "gatsby"

import { injectIntl } from "gatsby-plugin-intl"

import MainLayout from "../layouts/Main"
import { AboutPageView, DefaultPageView } from "../views"

const About = (props) => {
    const { intl } = props

    const viewData = {
        header: intl.formatMessage({
            id: `about-page.aboutHeading`,
        }),
        subheader: intl.formatMessage({
            id: `about-page.aboutSubheading`,
        }),
        text: intl.formatMessage({
            id: `about-page.aboutText`,
        }),
    }

    return (
        <MainLayout>
            {/* <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3> */}
            <AboutPageView {...viewData} />
            {/* <DefaultPageView {...props} /> */}
        </MainLayout>
    )
}

export default injectIntl(About)

// export const pageQuery = graphql`
//     query aboutPageBySlug($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             id
//             fields {
//                 slug
//             }
//             frontmatter {
//                 aboutText {
//                     en
//                     ru
//                 }
//             }
//         }
//     }
// `
