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

    const allCategoryObjectsList = allCategories.map((cat) => ({
        id: cat.node.frontmatter.categoryId,
        templateKey: cat.node.frontmatter.templateKey,
    }))

    const allProductsList = allProducts.map((product) => {
        return {
            id: product.id,
            slug: product.fields.slug,
            title: product.frontmatter.title,
            price: product.frontmatter.price,

            categoryId: product.frontmatter.productCategory,
            category: intl.formatMessage({
                id: `category.${product.frontmatter.productCategory}`,
            }),
            isFeatured: product.frontmatter.featuredproduct,
            shortDescription: intl.formatMessage({
                id: `${product.id}.productShortDescription`,
            }),
            description: intl.formatMessage({
                id: `${product.id}.productDescription`,
            }),
            featuredImage: {
                ...product.frontmatter.featuredImageObject.featuredImage,
                alt: intl.formatMessage({
                    id: `${product.id}.featuredImageAlt`,
                }),
            },
            cardImages: [
                {
                    ...product.frontmatter.productCardImages.image1Object
                        .image1,
                    alt: intl.formatMessage({
                        id: `${product.id}.productCardImage1Alt`,
                    }),
                },
                {
                    ...product.frontmatter.productCardImages.image2Object
                        .image2,
                    alt: intl.formatMessage({
                        id: `${product.id}.productCardImage2Alt`,
                    }),
                },
                {
                    ...product.frontmatter.productCardImages.image3Object
                        .image3,
                    alt: intl.formatMessage({
                        id: `${product.id}.productCardImage3Alt`,
                    }),
                },
            ],
        }
    })

    const viewData = {
        pageHeader: intl.formatMessage({ id: `products-page.productsHeading` }),
        pageSubheader: intl.formatMessage({
            id: `products-page.productsSubheading`,
        }),
        allProductsList: allProductsList,
        allCategoryObjectsList: allCategoryObjectsList,
    }

    return (
        <MainLayout>
            {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
            {/* <pre>{JSON.stringify(allCategoryObjectsList, null, 4)}</pre> */}
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
                    productCardImages {
                        image1Object {
                            image1 {
                                id
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        image2Object {
                            image2 {
                                id
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                        image3Object {
                            image3 {
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
        }
        categories: allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "category-item" } } }
        ) {
            edges {
                node {
                    frontmatter {
                        categoryId
                        templateKey
                    }
                }
            }
        }
    }
`
