import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { DefaultPageView } from "../views"

const CategoryItem = (props) => {
    const { pageContext } = props
    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>

            {/* <PageView {...props} /> */}
            <DefaultPageView {...props} />
        </MainLayout>
    )
}

export default CategoryItem

export const pageQuery = graphql`
    query pageProductsByCategory($strippedSlug: String!) {
        allMarkdownRemark(
            filter: { frontmatter: { productCategory: { eq: $strippedSlug } } }
        ) {
            nodes {
                id
                frontmatter {
                    title
                    productCategory
                    featuredproduct
                }
            }
        }
    }
`
