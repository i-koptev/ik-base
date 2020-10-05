import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

const ProductsRoll = (props) => {
    const { intl } = props
    const qdata = useStaticQuery(graphql`
        query ProductsRollQuery {
            allMarkdownRemark(
                filter: { frontmatter: { templateKey: { eq: "product-item" } } }
            ) {
                nodes {
                    id
                    frontmatter {
                        title
                        templateKey
                        productCategory
                        productShortDescription {
                            en
                            ru
                        }
                        productDescription {
                            en
                            ru
                        }
                        price
                        featuredimage {
                            childImageSharp {
                                fluid(maxWidth: 800, quality: 100) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                            publicURL
                        }
                        productCardImages {
                            image1 {
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                publicURL
                            }
                            image2 {
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                publicURL
                            }
                            image3 {
                                childImageSharp {
                                    fluid(maxWidth: 800, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                                publicURL
                            }
                        }
                    }
                }
            }
        }
    `)
    return <div>ProdRoll</div>
}

export default injectIntl(ProductsRoll)
