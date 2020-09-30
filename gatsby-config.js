module.exports = {
    plugins: [
        "gatsby-plugin-top-layout",
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/intl`,
                // supported language
                languages: [`ru`, `en`],
                // language file path
                defaultLanguage: `ru`,
                // option to redirect to `/ko` when connecting `/`
                redirect: false,
            },
        },

        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/blog`,
                name: "blog",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            // staticFolderName: "static",
                            name: "uploads",
                        },
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048,
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static",
                        },
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-material-ui",
            // If you want to use styled components you should change the injection order.
            options: {
                // stylesProvider: {
                //   injectFirst: true,
                // },
            },
        },
        // If you want to use styled components you should add the plugin here.
        // 'gatsby-plugin-styled-components',
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },

        "gatsby-plugin-netlify", // make sure to keep it last in the array
    ],
}
