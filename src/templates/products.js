import React from "react"
import { graphql } from "gatsby"

import { injectIntl } from "gatsby-plugin-intl"

import MainLayout from "../layouts/Main"
import { ProductsPageView, DefaultPageView } from "../views"

const ProductsPage = (props) => {
    const { intl, data } = props

    const {
        productsPage: {
            id: id,
            fields: { slug: slug },
        },
        productsRoll: { nodes: allProducts },
        categories: { edges: allCategories },
    } = data

    const allCategoryList = allCategories.map(
        (cat) => cat.node.frontmatter.categoryId
    )

    const viewData = {
        pageHeader: intl.formatMessage({ id: `products-page.productsHeading` }),
        pageSubheader: intl.formatMessage({
            id: `products-page.productsSubheading`,
        }),
        allProducts: allProducts,
        allCategoryList: allCategoryList,
    }

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>
            <ProductsPageView {...viewData} />
            {/* <DefaultPageView {...props} /> */}
        </MainLayout>
    )
}

export default injectIntl(ProductsPage)

export const pageQuery = graphql`
    query productsPageData($slug: String!) {
        productsPage: markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            fields {
                slug
            }
        }
        productsRoll: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "product-item" } } }
        ) {
            nodes {
                id
                fields {
                    slug
                }
                frontmatter {
                    title
                    productCategory
                    price
                    featuredproduct
                    featuredImageObject {
                        featuredImage {
                            id
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 800, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
        categories: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "category-page" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        categoryId
                    }
                }
            }
        }
    }
`
