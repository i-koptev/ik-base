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

    const viewSectionHeroData = {
        heroImage: heroImage,
        introBgImage: introBgImage,
        heading: intl.formatMessage({
            id: `front-page.sectionHero.heading`,
        }),
        subheading: intl.formatMessage({
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

    const viewSectionProjectsData = {
        title: "Our Projects",
        subtitle: "Section Projects Subitle",
        projects: [
            {
                projectHeader: "Project 1 header",
                projectDescription:
                    "Project 1 description. Lorem ipsum papirosum.",
            },
            {
                projectHeader: "Project 2 header",
                projectDescription:
                    "Project 2 description. Lorem ipsum papirosum.",
            },
            {
                projectHeader: "Project 3 header",
                projectDescription:
                    "Project 3 description. Lorem ipsum papirosum.",
            },
            {
                projectHeader: "Project 4 header",
                projectDescription:
                    "Project 4 description. Lorem ipsum papirosum.",
            },
            {
                projectHeader: "Project 5 header",
                projectDescription:
                    "Project 5 description. Lorem ipsum papirosum.",
            },
            {
                projectHeader: "Project 6 header",
                projectDescription:
                    "Project 6 description. Lorem ipsum papirosum.",
            },
        ],
    }

    const viewSectionTeamData = {
        title: "Our Projects",
        team: [
            {
                firstName: "Ivans",
                secondName: "Ivanovs",
                role: "Developer",
                photo: heroImage,
            },
            {
                firstName: "Sidors",
                secondName: "Sidorovs",
                role: "Developer2",
                photo: heroImage,
            },
            {
                firstName: "Pjotrs",
                secondName: "Petrovs",
                role: "Developer2",
                photo: heroImage,
            },
            {
                firstName: "Grigorijs",
                secondName: "Grigorjevs",
                role: "Developer3",
                photo: heroImage,
            },
            {
                firstName: "Ivans",
                secondName: "Ivanovs",
                role: "Developer",
                photo: heroImage,
            },
            {
                firstName: "Sidors",
                secondName: "Sidorovs",
                role: "Developer2",
                photo: heroImage,
            },
            {
                firstName: "Pjotrs",
                secondName: "Petrovs",
                role: "Developer2",
                photo: heroImage,
            },
            {
                firstName: "Grigorijs",
                secondName: "Grigorjevs",
                role: "Developer3",
                photo: heroImage,
            },
        ],
    }

    return (
        <MainLayout>
            {/* <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3> */}
            <FrontPageView
                viewSectionHeroData={viewSectionHeroData}
                viewSectionProjectsData={viewSectionProjectsData}
                viewSectionTeamData={viewSectionTeamData}
            />
            {/* <DefaultPageView {...props} /> */}
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
