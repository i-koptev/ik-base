/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import {
    changeLocale,
    injectIntl,
    Link,
    FormattedMessage,
} from "gatsby-plugin-intl"

import clsx from "clsx"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { List, ListItem, Button } from "@material-ui/core"

import DashboardIcon from "@material-ui/icons/Dashboard"
import PeopleIcon from "@material-ui/icons/People"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import TextFieldsIcon from "@material-ui/icons/TextFields"
import ImageIcon from "@material-ui/icons/Image"
import AccountBoxIcon from "@material-ui/icons/AccountBox"
import SettingsIcon from "@material-ui/icons/Settings"
import LockOpenIcon from "@material-ui/icons/LockOpen"

// import MenuItem from "./MenuItem"

const useStyles = makeStyles((theme) => ({
    root: {},
    item: {
        display: "flex",
        paddingTop: 0,
        paddingBottom: 0,
        "&:hover": {
            // backgroundColor: "#fee",
        },
    },
    button: {
        display: "flex",
        color: theme.layouts.Main.SidebarNav.MenuItem.fontColor,
        padding: "10px 8px",
        justifyContent: "flex-start",
        textTransform: "none",
        letterSpacing: 0.1,
        width: "100%",
        fontWeight: theme.layouts.Main.SidebarNav.MenuItem.fontWeight,
        textDecoration: "none",
        "&:hover": {
            backgroundColor:
                theme.layouts.Main.SidebarNav.MenuItem.hoverBackgroundColor,
            color: theme.layouts.Main.SidebarNav.MenuItem.hoverFontColor,
        },
        "& svg": {
            color: theme.layouts.Main.SidebarNav.MenuItem.iconColor,
            width: "18px",
            height: "18px",
            transform: "translateY(4px)",
            marginRight: "12px",
        },
    },
    active: {
        color: theme.layouts.Main.SidebarNav.MenuItem.activeFontColor,
        fontWeight: theme.layouts.Main.SidebarNav.MenuItem.activeFontWeight,
        "&:hover": {
            color: theme.layouts.Main.SidebarNav.MenuItem.activeHoverFontColor,
        },
    },
}))

const CustomLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <Link {...props} />
    </div>
))

const OuterLink = forwardRef((props, ref) => (
    <div ref={ref} style={{ flexGrow: 1 }}>
        <a href={props.to} {...props} target="_blank" />
    </div>
))

const SidebarNav = (props) => {
    const { intl, className, sidebarNavItems, ...rest } = props

    const classes = useStyles()

    const iconObj = {
        DashboardIcon: <DashboardIcon />,
        ShoppingBasketIcon: <ShoppingBasketIcon />,
        PeopleIcon: <PeopleIcon />,
        LockOpenIcon: <LockOpenIcon />,
        TextFieldsIcon: <TextFieldsIcon />,
        ImageIcon: <ImageIcon />,
        AccountBoxIcon: <AccountBoxIcon />,
        SettingsIcon: <SettingsIcon />,
    }

    return (
        <List {...rest} className={clsx(classes.root, className)}>
            {/* {JSON.stringify(sidebarNavItems)} */}
            {/* {mainNavLinks.map((link) => ( */}
            {sidebarNavItems.map((menuItem) => (
                <ListItem
                    className={classes.item}
                    disableGutters
                    key={`key-${menuItem.slug}`}
                >
                    {/^\/(?!\/)/.test(menuItem.slug) ? (
                        <Button
                            activeClassName={classes.active}
                            className={classes.button}
                            component={CustomLink}
                            to={menuItem.slug}
                        >
                            <div className={classes.icon}>
                                {iconObj[menuItem.icon]}
                            </div>
                            {intl.formatMessage({
                                id: `sidebarMenu.${menuItem.slug.replace(
                                    /\//g,
                                    ""
                                )}.title`,
                            })}
                        </Button>
                    ) : (
                        <Button
                            activeClassName={classes.active}
                            className={classes.button}
                            component={OuterLink}
                            to={menuItem.slug}
                        >
                            <div className={classes.icon}>
                                {iconObj[menuItem.icon]}
                            </div>
                            {intl.formatMessage({
                                id: `sidebarMenu.${menuItem.slug.replace(
                                    /\//g,
                                    ""
                                )}.title`,
                            })}
                        </Button>
                    )}
                </ListItem>
            ))}
        </List>
    )
}

SidebarNav.propTypes = {
    className: PropTypes.string,
    mainNavLinks: PropTypes.array.isRequired,
}

export default injectIntl(SidebarNav)
