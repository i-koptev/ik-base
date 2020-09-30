import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import PageView from "../views/PageView"

const DefaultPage = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            <PageView {...props} />
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
