# Site starter build with Gatsby, NetlifyCMS, Material-UI and more...

## Contents

### 1. [Development environment setup](#envsetup)

- NVM and Node. Source: https://github.com/coreybutler/nvm-windows
- Yarn and project initialization. Source: https://classic.yarnpkg.com/en/docs/install/#windows-stable
- GIT. Source: https://git-scm.com/download/win
- Prettier, ESLint.
- VSCode.

### 2. [Gatsby installation](#gatsbyinstall)

### 3. [Github - make repo](#githubsetup) --> Branch "Base" created

### 4. [Adding Material UI](#materialuisetup)

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

- add extension "Prettier (Esben Petersen)"
- in VSCode settings ('ctrl + ,) check "Format on save" and "Prettier: Require Config"

Add .prettierrc, .prettierignore, .eslintrc.json to the root of the project

VSCode settings mainly taken from:
https://btholt.github.io/complete-intro-to-react-v5/
https://github.com/btholt/complete-intro-to-react-v5

Prettier and ESLint have partially crossed functions - eslint-config-prettier tells
eslint not to format code - as it is already formatted by Prettier.
Prettier is more "mechanical" - it makes tabs, whitespaces, new lines.
So install:

```
yarn add -D eslint eslint-config-prettier
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
