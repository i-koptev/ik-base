import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { PageView, DefaultPageView } from "../views"

const DefaultPage = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            {/* <PageView {...props} /> */}
            <DefaultPageView {...props} />
        </MainLayout>
    )
}

export default DefaultPage

export const pageQuery = graphql`
    query pageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            fields {
                slug
            }
        }
    }
`
