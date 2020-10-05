import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { DefaultPageView } from "../views"

const DefaultPage = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>

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
