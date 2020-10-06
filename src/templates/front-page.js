import React from "react"
import { graphql } from "gatsby"

import { injectIntl } from "gatsby-plugin-intl"

import MainLayout from "../layouts/Main"
import { FrontPageView, DefaultPageView } from "../views"

const FrontPage = (props) => {
    const { intl, data } = props

    const {
        markdownRemark: {
            frontmatter: {
                indexSectionHero: { heroImage: heroImage },
                indexSectionIntro: { introBgImage: introBgImage },
            },
        },
    } = data

    const viewData = {
        heroImage: heroImage,
        introBgImage: introBgImage,
        header: intl.formatMessage({
            id: `front-page.sectionHero.heading`,
        }),
        subheader: intl.formatMessage({
            id: `front-page.sectionHero.subheading`,
        }),
        feature1short: intl.formatMessage({
            id: `front-page.sectionHero.features.feature1.feature1shortdescription`,
        }),
        feature1detailed: intl.formatMessage({
            id: `front-page.sectionHero.features.feature1.feature1detaileddescription`,
        }),

        feature2short: intl.formatMessage({
            id: `front-page.sectionHero.features.feature2.feature2shortdescription`,
        }),
        feature2detailed: intl.formatMessage({
            id: `front-page.sectionHero.features.feature2.feature2detaileddescription`,
        }),

        feature3short: intl.formatMessage({
            id: `front-page.sectionHero.features.feature3.feature3shortdescription`,
        }),
        feature3detailed: intl.formatMessage({
            id: `front-page.sectionHero.features.feature3.feature3detaileddescription`,
        }),

        feature4short: intl.formatMessage({
            id: `front-page.sectionHero.features.feature4.feature4shortdescription`,
        }),
        feature4detailed: intl.formatMessage({
            id: `front-page.sectionHero.features.feature4.feature4detaileddescription`,
        }),
    }

    return (
        <MainLayout>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>
            <FrontPageView {...viewData} />
            <DefaultPageView {...props} />
        </MainLayout>
    )
}

export default injectIntl(FrontPage)

export const pageQuery = graphql`
    query frontPageBySlug($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            frontmatter {
                indexSectionHero {
                    heroImage {
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        publicURL
                    }
                    heading {
                        ru
                        en
                    }
                    subheading {
                        ru
                        en
                    }
                    features {
                        feature1 {
                            feature1shortdescription {
                                ru
                                en
                            }
                            feature1detaileddescription {
                                ru
                                en
                            }
                        }
                        feature2 {
                            feature2shortdescription {
                                ru
                                en
                            }
                            feature2detaileddescription {
                                ru
                                en
                            }
                        }
                        feature3 {
                            feature3shortdescription {
                                ru
                                en
                            }
                            feature3detaileddescription {
                                ru
                                en
                            }
                        }
                        feature4 {
                            feature4shortdescription {
                                ru
                                en
                            }
                            feature4detaileddescription {
                                ru
                                en
                            }
                        }
                    }
                }
                indexSectionIntro {
                    __typename
                    introBgImage {
                        id
                        childImageSharp {
                            fluid(maxWidth: 1200, quality: 100) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                        publicURL
                    }
                }
            }
        }
    }
`
