import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

import {
    changeLocale,
    injectIntl,
    Link,
    FormattedMessage,
} from "gatsby-plugin-intl"

import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.layouts.Main.Topbar.backgroundColor,
        boxShadow: theme.layouts.Main.Topbar.boxShadow,
    },
    logo: {
        color: "white",
        textDecoration: "none",
        fontSize: "1rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.1rem",
    },
    flexGrow: {
        flexGrow: 1,
    },
    signOutButton: {
        marginLeft: theme.spacing(1),
    },
    mainNavigationLink: {
        textDecoration: "none",
        textTransform: "uppercase",
        marginRight: "1rem",
        color: "white",
        fontWeight: 500,
        letterSpacing: "0.15rem",
        "&:hover": {
            color: "yellow",
        },
    },
    active: {
        color: "#222",
    },
    langSwitherButton: {
        "&:hover": {
            // backgroundColor: "red",
            outline: "2px solid #ffffff22",
            color: "yellow",
        },
        "& .MuiButton-label": {
            letterSpacing: "0.02rem",
        },
    },
}))

const Topbar = (props) => {
    const { intl, className, onSidebarOpen, ...rest } = props

    const classes = useStyles()

    const qdata = useStaticQuery(graphql`
        query TopbarMenuItemsQuery {
            markdownRemark(fields: { slug: { eq: "/topbar-menu-settings/" } }) {
                frontmatter {
                    menuitem {
                        slug
                    }
                }
            }
        }
    `)

    const { menuitem: menuItems } = qdata.markdownRemark.frontmatter
    // const [notifications] = useState([])

    return (
        <AppBar {...rest} className={clsx(classes.root, className)}>
            <Toolbar>
                <Link to="/" className={classes.logo}>
                    {/* <img alt="Logo" src="/images/logos/logo--white.svg" /> */}
                    IK-Base
                </Link>
                <div className={classes.flexGrow} />
                <Hidden mdDown>
                    {menuItems.slice(0, 4).map((menuItem) => (
                        <Link
                            key={`key-${menuItem.slug}`}
                            className={classes.mainNavigationLink}
                            activeClassName={classes.active}
                            to={
                                menuItem.slug === "/"
                                    ? menuItem.slug
                                    : `/${menuItem.slug.replace(/\//g, "")}/`
                            }
                        >
                            {intl.formatMessage({
                                id: `topbarMenu.${menuItem.slug.replace(
                                    /\//g,
                                    ""
                                )}.title`,
                            })}
                        </Link>
                    ))}
                </Hidden>
                <Button
                    onClick={() => changeLocale("ru")}
                    className={classes.langSwitherButton}
                    color="inherit"
                >
                    RU
                </Button>
                <Button
                    onClick={() => changeLocale("en")}
                    className={classes.langSwitherButton}
                    color="inherit"
                >
                    EN
                </Button>

                <Hidden mdDown>
                    <IconButton color="inherit">
                        <Badge
                            // badgeContent={notifications.length}
                            badgeContent={7}
                            // color="primary"
                            color="error"
                            // variant="dot"
                        >
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        className={classes.signOutButton}
                        color="inherit"
                    >
                        <InputIcon />
                    </IconButton>
                </Hidden>
                <Hidden lgUp>
                    <IconButton color="inherit" onClick={onSidebarOpen}>
                        <MenuIcon />
                    </IconButton>
                </Hidden>
            </Toolbar>
        </AppBar>
    )
}

Topbar.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
}

export default injectIntl(Topbar)
