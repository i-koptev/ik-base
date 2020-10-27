import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import {
    changeLocale,
    injectIntl,
    Link,
    FormattedMessage,
} from "gatsby-plugin-intl"

import Headroom from "react-headroom"

import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import { AppBar, Toolbar, Badge, Hidden, IconButton } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import MenuIcon from "@material-ui/icons/Menu"
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined"
import InputIcon from "@material-ui/icons/Input"

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: theme.layouts.Main.Topbar.backgroundColor,
        backgroundColor: "transparent", // needs to be transparent for ReactHeadroom colors to work
        boxShadow: theme.layouts.Main.Topbar.boxShadow,
    },
    logo: {
        color: theme.layouts.Main.Topbar.logoColor,
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
        transition: "color 200ms linear",
        textDecoration: "none",
        // textTransform: "uppercase",
        textTransform: "capitalize",
        marginRight: "1rem",
        color: theme.layouts.Main.Topbar.mainNavigationLinkColor,
        fontWeight: 400,
        letterSpacing: "0.15em",
        "&::after": {
            content: '""',
            width: "100%",
            height: "1px",
            margin: "0 auto",
            backgroundColor:
                theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
            display: "block",
            // margin-bottom: .3rem;
            opacity: "0",
            transitionDuration: "500ms",
            transitionProperty: "opacity",
        },
        "&:hover": {
            color: theme.layouts.Main.Topbar.mainNavigationLinkHoverColor,
            "&::after": {
                opacity: "0.5",
            },
        },
        "&$active": {
            color: theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
            "&:hover": {
                cursor: "default",
                // color:
                //     theme.layouts.Main.Topbar
                //         .mainNavigationLinkActiveHoverColor,
                "&::after": {
                    opacity: "1",
                },
            },
            "&::after": {
                content: '""',
                width: "100%",
                height: "1px",
                margin: "0 auto",
                backgroundColor:
                    theme.layouts.Main.Topbar.mainNavigationLinkActiveColor,
                display: "block",
                // margin-bottom: .3rem;
                opacity: "1",
                transitionDuration: "500ms",
                transitionProperty: "opacity",
            },
        },
    },
    active: {},
    langSwitcherButton: {
        color: theme.layouts.Main.Topbar.langSwitcherButtonColor,
        "&:hover": {
            // backgroundColor: "transparent",
            outline: `2px solid ${theme.layouts.Main.Topbar.langSwitcherButtonHoverOutlineColor}`,
            color: theme.layouts.Main.Topbar.langSwitcherButtonHoverColor,
        },
        "& .MuiButton-label": {
            letterSpacing: "0.02rem",
        },
    },
    toolbar: {
        minHeight: "56px",
        [theme.breakpoints.up("sm")]: {
            minHeight: "64px",
        },
    },
    headroom: {
        "& .headroom": {
            transition:
                "background-color 500ms linear, border-bottom 500ms linear",
            backgroundColor: theme.layouts.Main.Topbar.backgroundColor,
            borderBottom: theme.mainNavigationBorderBottom,
            position: "fixed",
            width: "100%",
        },
        "& .headroom--pinned": {
            backgroundColor: theme.layouts.Main.Topbar.pinnedBackgroundColor,
            borderBottom: theme.mainNavigationPinnedBorderBottom,
        },
    },
    burger: {
        color: theme.layouts.Main.Topbar.burgerColor,
        marginRight: "0.9rem",
    },
}))

const TopbarHeadroom = (props) => {
    const { intl, className, onSidebarOpen, ...rest } = props

    const classes = useStyles()
    const theme = useTheme()

    const qdata = useStaticQuery(graphql`
        query TopbarHeadroomMenuItemsQuery {
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

    const [unfixed, setUnfixed] = useState()

    return (
        <Headroom
            onPin={() => console.log("pinned")}
            onUnpin={() => console.log("unpinned")}
            onUnfix={() => console.log("unfixed")}
            wrapperStyle={{ height: "100px" }}
            variant="header"
            className={classes.headroom}
        >
            <AppBar
                {...rest}
                className={clsx(classes.root, className)}
                position="static"
            >
                <Container maxWidth={theme.siteContainer.maxWidth}>
                    <Toolbar
                        component="nav"
                        disableGutters
                        classes={{ root: classes.toolbar }}
                    >
                        <Link to="/" className={classes.logo}>
                            {/* <img alt="Logo" src="/images/logos/logo--white.svg" /> */}
                            IK-Base
                        </Link>
                        {/* <pre>{JSON.stringify(props.intl.locale, null, 4)}</pre> */}
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
                                            : `/${menuItem.slug.replace(
                                                  /\//g,
                                                  ""
                                              )}/`
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
                        {props.intl.locale === "en" ? (
                            <Button
                                onClick={() => changeLocale("ru")}
                                className={classes.langSwitcherButton}
                                // color="inherit"
                            >
                                RU
                            </Button>
                        ) : (
                            <Button
                                onClick={() => changeLocale("en")}
                                className={classes.langSwitcherButton}
                                // color="inherit"
                            >
                                EN
                            </Button>
                        )}
                        {/* <Hidden mdDown>
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
                        </Hidden> */}
                        <Hidden lgUp>
                            <IconButton
                                style={{ paddingRight: 0 }}
                                color="inherit"
                                onClick={onSidebarOpen}
                            >
                                <MenuIcon className={classes.burger} />
                            </IconButton>
                        </Hidden>
                    </Toolbar>
                </Container>
            </AppBar>
        </Headroom>
    )
}

TopbarHeadroom.propTypes = {
    className: PropTypes.string,
    onSidebarOpen: PropTypes.func,
}

export default injectIntl(TopbarHeadroom)
