import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"

// import { Sidebar, Sidebar2, Topbar, Footer } from "./components"
import { Sidebar, Topbar, Footer } from "./components"
// import SEO from "./Seo" TODO

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 56,
        height: "100%",
        [theme.breakpoints.up("sm")]: {
            paddingTop: 64,
        },
    },
    shiftContent: {
        paddingLeft: 240,
    },
    content: {
        height: "100%",
    },
}))

const Main = (props) => {
    const { children, lang } = props

    const classes = useStyles()
    const theme = useTheme()
    const isDesktop = useMediaQuery(theme.breakpoints.up("lg"), {
        defaultMatches: true,
    })

    const [openSidebar, setOpenSidebar] = useState(false)

    const handleSidebarOpen = () => {
        setOpenSidebar(true)
    }

    const handleSidebarClose = () => {
        setOpenSidebar(false)
    }

    // const shouldOpenSidebar = isDesktop ? true : openSidebar //comment to show sidebar on Desktop
    const shouldOpenSidebar = openSidebar //uncomment to show sidebar on Desktop

    return (
        <div
            className={clsx({
                [classes.root]: true,
                // [classes.shiftContent]: isDesktop, //uncomment to show sidebar on Desktop
            })}
        >
            <Topbar onSidebarOpen={handleSidebarOpen} />
            <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? "persistent" : "temporary"}
                lang={lang}
            />
            <main className={classes.content}>
                {children}
                <Footer />
            </main>
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node,
}

export default Main

// import React from "react"
// import Footer from "./Footer"
// import Navigation from "./Navigation"
// import SEO from "./Seo"

// const Layout = ({ title, description, lang, children }) => {
//     return (
//         <div
//             style={{
//                 backgroundImage: "url(/img/bg_16.jpg)",
//                 backgroundRepeat: "repeat",
//                 minHeight: "100vh",
//                 height: "100%",
//             }}
//         >
//             <SEO title={title} description={description} lang={lang} />
//             <Navigation />
//             {children}
//             <Footer />
//         </div>
//     )
// }

// export default Layout
