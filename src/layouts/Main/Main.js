import React, { useState } from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import { useMediaQuery } from "@material-ui/core"
import Container from "@material-ui/core/Container"

import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import Fab from "@material-ui/core/Fab"
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp"
import Zoom from "@material-ui/core/Zoom"

// import { Sidebar, Sidebar2, Topbar, Footer } from "./components"
import { Sidebar, TopbarHeadroom, Footer } from "./components"
// import SEO from "./Seo" TODO

const useStyles = makeStyles((theme) => ({
    root: {
        // paddingTop: 56,
        [theme.breakpoints.up("sm")]: {
            // paddingTop: 64,
        },
    },
    rootHeight: {
        height: "100%",
    },
    shiftContent: {
        paddingLeft: 240,
    },
    content: {
        height: "100%",
    },
    fab: {
        width: "48px",
        height: "48px",
        [theme.breakpoints.up("sm")]: {
            width: "56px",
            height: "56px",
        },
        opacity: 0.8,

        color: "#777",
        "&:hover": {
            opacity: 1,
            color: "black",
        },
    },
}))

function ScrollTop(props) {
    const { children, window } = props
    const classes = useStyles()
    // Material UI docs:
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        // target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    })

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector(
            "#back-to-top-anchor"
        )

        if (anchor) {
            anchor.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    return (
        <Zoom in={trigger} timeout={500}>
            <div
                onClick={handleClick}
                role="presentation"
                style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                }}
            >
                {children}
            </div>
        </Zoom>
    )
}

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
            className={clsx(
                {
                    // [classes.shiftContent]: isDesktop, //uncomment to show sidebar on Desktop
                },
                classes.rootHeight
            )}
        >
            <div id="back-to-top-anchor" />
            <TopbarHeadroom onSidebarOpen={handleSidebarOpen} />
            <Sidebar
                onClose={handleSidebarClose}
                open={shouldOpenSidebar}
                variant={isDesktop ? "persistent" : "temporary"}
                lang={lang}
            />
            {/* <Container
                maxWidth={theme.siteContainer.maxWidth}
                component="main"
                className={classes.content}
            > */}
            {children}
            {/* </Container> */}
            <Footer />
            <ScrollTop {...props}>
                <Fab
                    className={classes.fab}
                    size="small"
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
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
