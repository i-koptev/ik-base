import React from "react"
import { graphql } from "gatsby"

import MainLayout from "../layouts/Main"
import { ProductsPageView, DefaultPageView } from "../views"

const ProductsPage = (props) => {
    const { pageContext } = props

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>

            <ProductsPageView {...props} />
            <DefaultPageView {...props} />
        </MainLayout>
    )
}

export default ProductsPage

export const pageQuery = graphql`
    query productsPageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            fields {
                slug
            }
        }
    }
`
