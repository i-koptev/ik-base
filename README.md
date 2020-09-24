# Site starter build with Gatsby, NetlifyCMS, Material-UI and more...

## Contents

### 1. [Development environment setup](#envsetup)

-   NVM and Node. Source: https://github.com/coreybutler/nvm-windows
-   Yarn and project initialization. Source: https://classic.yarnpkg.com/en/docs/install/#windows-stable
-   GIT. Source: https://git-scm.com/download/win
-   Prettier, ESLint.
-   VSCode.

### 2. [Gatsby installation](#gatsbyinstall)

### 3. [Github - make repo](#githubsetup) --> Branch "Base" created

### 4. [Adding Material UI](#materialuisetup) --> Branch "Material-UI" created

## <span id="envsetup">1. Development environment setup</span>

> #### 1. NVM and Node

Install NVM - https://github.com/coreybutler/nvm-windows

```
$ nvm list available

$ nvm install 12.18.4

$ nvm use 12.18.4

$ nvm list
* 12.18.4 (Currently using 64-bit executable)

$ node -v
v12.18.4

$ npm -v
6.14.6
```

In the root of the project create file .nvmrc ( it will be used by Netlify):

```
$ touch .nvmrc

$ echo v12.18.4 > .nvmrc

$ cat .nvmrc
v12.18.4
```

> #### 2. Install Yarn with Windows installer: https://classic.yarnpkg.com/en/docs/install/#windows-stable

```

\$ yarn -v
1.22.5

```

Initialize project:

```

\$ yarn init

```

> #### 3. Install GIT as described: https://git-scm.com/download/win

> #### 4. Prettier

Install Prettier (to run from cli):

```
$ yarn add -D prettier
```

For autoformatting in VSCode:

-   add extension "Prettier (Esben Petersen)"
-   in VSCode settings ('ctrl + ,) check "Format on save" and "Prettier: Require Config"

Add .prettierrc, .prettierignore, .eslintrc.json to the root of the project

VSCode settings mainly taken from:
https://btholt.github.io/complete-intro-to-react-v5/
https://github.com/btholt/complete-intro-to-react-v5

Prettier and ESLint have partially crossed functions - eslint-config-prettier tells
eslint not to format code - as it is already formatted by Prettier.
Prettier is more "mechanical" - it makes tabs, whitespaces, new lines.
So install:

```
yarn add -D eslint eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsx-a11y eslint-plugin-react-hooks dumper.js
```

## <span id="gatsbyinstall">2. Gatsby installation</span>

---

```

$ npm install -g gatsby-cli //actually this isn't needed - no starter is used

$ yarn add gatsby react react-dom

```

## <span id="githubsetup">3. Make new repository on Github</span>

---

Initialize Git in project folder.

```
$ git init
$ git add .
$git commit -m "Initial commit"
```

Make new repo on Github

```

git remote add origin https://github.com/i-koptev/ik-base.git
git push -u origin master

```

## <span id="materialuisetup">4. Add Material UI</span>

---

Material-UI installation tutorial: https://material-ui.com/getting-started/installation/

Material-UI installation on Gatsby example: https://github.com/mui-org/material-ui/tree/c99bd0dbbfdc72e2e5e1805367cc9a42ff393e3c/examples/gatsby

Add packages:

```

$ yarn add @material-ui/core @material-ui/icons gatsby-plugin-material-ui react-helmet gatsby-plugin-react-helmet prop-types

```

Copy folder _/plugins/gatsby-plugin-top-layout/_ with all its contents to the root of the project.

Change contents of _/plugins/gatsby-plugin-top-layout/package.json_:

```
{
    "name": "gatsby-plugin-top-layout"
}
```

to

```
{
    "name": "gatsby-plugin-top-layout",
    "main": "TopLayout.js"
}
```

Add to _/gatsby-config.js_ support for material-ui:

```
module.exports = {
    plugins: [
        "gatsby-plugin-top-layout",
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
    ],
}
```

Make theme file _theme.js_ in location defined in _Project_Root_Folder/plugins/TopLayout.js_ "import theme" section.

## <span id="markdownsetup">5. Add Support for Markdown</span>

```
$ yarn add gatsby-source-filesystem gatsby-image gatsby-transformer-remark gatsby-remark-images gatsby-transformer-sharp gatsby-plugin-sharp gatsby-remark-copy-linked-files gatsby-remark-relative-images clsx lodash lodash-webpack-plugin

$ yarn add -D eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-jsx-a11y eslint-plugin-react-hooks
```

// prismjs gatsby-remark-prismjs -not yet

Edit gatsby-config.js:

```
module.exports = {
    plugins: [
        "gatsby-plugin-top-layout",
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
                path: `${__dirname}/settings/site-metadata.md`,
                name: "meta",
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images",
            },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
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
    ],
}

```

## <span id="netlifycmssetup">6. Add Netlify CMS</span>

gatsby-plugin-netlify - not needed for Netlify CNS, but for Netlify - adds some? headers

```
$ yarn add gatsby-plugin-netlify netlify-cms-app gatsby-plugin-netlify-cms
```

Create file /scr/cms/cms.js

Copy preview-templates folder with content from starter

Edit gatsby-config.js:

```
 {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms.js`,
            },
        },
        "gatsby-plugin-netlify", // make sure to keep it last in the array
```

Create /static/admin/config.yml

npx netlify-cms-proxy-server

## <span id="intl">. Add Internationalization</span>

```
$ yarn add gatsby-plugin-intl
```
