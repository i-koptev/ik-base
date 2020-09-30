import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { Divider, Drawer } from "@material-ui/core"

// import { Profile, SidebarNav, UpgradePlan } from "./components"
import { SidebarNav } from "./components"

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        [theme.breakpoints.up("lg")]: {
            marginTop: 64,
            height: "calc(100% - 64px)",
        },
    },
    root: {
        backgroundColor: theme.layouts.Main.Sidebar.backgroundColor,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        padding: theme.spacing(2),
    },
    divider: {
        margin: theme.spacing(2, 0),
        backgroundColor: theme.layouts.Main.Sidebar.dividerColor,
    },
    nav: {
        marginBottom: theme.spacing(2),
    },
}))

const Sidebar = (props) => {
    const { lang, open, variant, onClose, className, ...rest } = props

    const classes = useStyles()

    const qdata = useStaticQuery(graphql`
        query SidebarMenuItemsQuery {
            markdownRemark(
                fields: { slug: { eq: "/sidebar-menu-settings/" } }
            ) {
                frontmatter {
                    menuitem {
                        slug
                        icon
                    }
                }
            }
        }
    `)
    const { menuitem: sidebarNavItems } = qdata.markdownRemark.frontmatter

    return (
        <Drawer
            anchor="left"
            classes={{ paper: classes.drawer }}
            onClose={onClose}
            open={open}
            variant={variant}
        >
            <div {...rest} className={clsx(classes.root, className)}>
                {/* <Profile /> */}
                <Divider className={classes.divider} />
                <SidebarNav
                    className={classes.nav}
                    sidebarNavItems={sidebarNavItems}
                />
                {/* <UpgradePlan /> */}
            </div>
        </Drawer>
    )
}

Sidebar.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
    variant: PropTypes.string.isRequired,
}

export default Sidebar
