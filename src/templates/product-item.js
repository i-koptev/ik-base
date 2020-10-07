import React from "react"
import { graphql } from "gatsby"

import { injectIntl } from "gatsby-plugin-intl"

import MainLayout from "../layouts/Main"
import { ProductPageView, DefaultPageView } from "../views"

const ProductItem = (props) => {
    const { intl, data } = props

    const {
        markdownRemark: {
            id: id,
            frontmatter: {
                title: title,
                productCategory: category,
                price: price,
                featuredImageObject: { featuredImage: featuredImage },
                productCardImages: {
                    image1Object: { image1: image1 },
                    image2Object: { image2: image2 },
                    image3Object: { image3: image3 },
                },
            },
        },
    } = data

    const viewData = {
        id: id,
        title: title,
        category: category,
        price: price,
        featuredImage: featuredImage,
        image1: image1,
        image2: image2,
        image3: image3,
        shortDescription: intl.formatMessage({
            id: `${id}.productShortDescription`,
        }),
        description: intl.formatMessage({ id: `${id}.productDescription` }),
        featuredImageAlt: intl.formatMessage({ id: `${id}.featuredImageAlt` }),
        image1Alt: intl.formatMessage({ id: `${id}.productCardImage1Alt` }),
        image2Alt: intl.formatMessage({ id: `${id}.productCardImage2Alt` }),
        image3Alt: intl.formatMessage({ id: `${id}.productCardImage3Alt` }),
    }

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>
            {/* <DefaultPageView {...props} /> */}
            <ProductPageView {...viewData} />
        </MainLayout>
    )
}

export default injectIntl(ProductItem)

export const pageQuery = graphql`
    query productById($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
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
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
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
                                fluid(maxWidth: 1200, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    image2Object {
                        image2 {
                            id
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1200, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                    image3Object {
                        image3 {
                            id
                            publicURL
                            childImageSharp {
                                fluid(maxWidth: 1200, quality: 100) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
