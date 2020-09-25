const _ = require("lodash")
const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")
const { fmImagesToRelative } = require("gatsby-remark-relative-images")
const { dd, dump } = require("dumper.js")

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        {
            frontPage: allMarkdownRemark(
                limit: 1000
                filter: { fields: { slug: { eq: "/front-page/" } } }
            ) {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
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
    // if (node.internal.type === `ImageSharp`) {
    //     dump("######################################")
    //     dump(node)
    //     dump("######################################")
    // }
}
