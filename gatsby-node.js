const _ = require("lodash")
const fs = require("fs")
const path = require("path")
const { resolve } = require("path")
const url = require("url")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { dd, dump } = require("dumper.js")

const createTopbarMenuTranslations = require(`./create/createTopbarMenuTranslations`)
const createSidebarMenuTranslations = require(`./create/createSidebarMenuTranslations`)
const createFrontPageTranslations = require(`./create/createFrontPageTranslations`)

const siteLanguages = [`en`, `ru`]

const intlTranslations = {}

siteLanguages.forEach((item) => {
    intlTranslations[item] = {}
})

exports.createPages = async (props) => {
    const { actions, graphql, reporter } = props

    await createTopbarMenuTranslations(props, {
        intlTranslations,
        siteLanguages,
    })
    await createSidebarMenuTranslations(props, {
        intlTranslations,
        siteLanguages,
    })
    await createFrontPageTranslations(props, {
        intlTranslations,
        siteLanguages,
    })

    siteLanguages.forEach((item) => {
        intlTranslations[item] = {
            ...intlTranslations[item],
            ...JSON.parse(
                fs.readFileSync(
                    path.join(__dirname, `./src/intl/${item}-static.json`),
                    {
                        encoding: "utf8",
                    }
                )
            ),
        }
        fs.writeFileSync(
            path.join(__dirname, `./src/intl/${item}.json`),
            JSON.stringify(intlTranslations[item], null, 4)
        )
    })

    // dd(intlTranslations)

    const {
        data: {
            allMarkdownRemark: { nodes: allPages },
        },
    } = await graphql(`
        {
            allMarkdownRemark(
                limit: 1000
                filter: {
                    fields: {
                        slug: {
                            nin: [
                                "/sidebar-menu-settings/"
                                "/topbar-menu-settings/"
                                "/site-settings/"
                            ]
                        }
                    }
                }
            ) {
                nodes {
                    id
                    fields {
                        slug
                    }
                }
            }
        }
    `)

    //https://gist.github.com/jens1101/9f3faa6c2dae23537257f1c3d0afdfdf
    function removeTrailingSlashes(url) {
        return url.replace(/\/+$/, "") //Removes one or more trailing slashes from URL
    }
    const pagesWithoutFrontPage = allPages.filter(
        (page) => page.fields.slug !== "/front-page/"
    )
    allPages.map(async (page, i) => {
        const id = page.id

        // ---------------- Just for fun -----------------
        const someSlug = "/abc/def/"
            .split("/") // ["", "abc", "def", ""]
            .filter((el) => el) //  ["abc", "def"] - Because an empty string evaluates to boolean false. It works with all falsy values like 0, false, null, undefined, '', etc.
            .slice(-1)[0] // last element of array
        // ---------------- Just for fun -----------------

        const isFrontPage = page.fields.slug === "/front-page/"

        const frontPageTemplate = resolve(`src/templates/front-page.js`)
        const existsFrontPageTemplate = fs.existsSync(frontPageTemplate)

        const customTemplate = resolve(
            `src/templates/${removeTrailingSlashes(page.fields.slug)}.js`
        )
        const existsCustomTemplate = fs.existsSync(customTemplate)

        const defaultTemplate = resolve(`src/templates/default-page.js`)

        var actualTemplate = null

        switch (true) {
            case isFrontPage && existsFrontPageTemplate:
                actualTemplate = frontPageTemplate
                break

            case existsCustomTemplate:
                actualTemplate = customTemplate
                break

            default:
                actualTemplate = defaultTemplate
        }

        actions.createPage({
            path: isFrontPage ? "/" : page.fields.slug,
            component: actualTemplate,
            // additional data can be passed via context
            context: {
                id: id,
                slug: page.fields.slug,
            },
        })
    })
}
exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node) // convert image paths for gatsby images

    if (node.internal.type === `MarkdownRemark`) {
        const value = createFilePath({ node, getNode })
        createNodeField({
            name: `slug`,
            node,
            value,
        })
    }
}
