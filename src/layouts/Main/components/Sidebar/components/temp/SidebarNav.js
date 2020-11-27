/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, { forwardRef } from "react"

import { injectIntl, Link } from "gatsby-plugin-intl"

import clsx from "clsx"
import PropTypes from "prop-types"

import { makeStyles } from "@material-ui/styles"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"

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
    root: {
        flexGrow: 1,
        // backgroundColor: "red",
    },
    link: {
        color: theme.layouts.Main.SidebarNav.MenuItem.fontColor,
        textDecoration: "none",
    },
    listItem: {
        padding: "7px 10px",
        "&:hover": {
            backgroundColor:
                theme.layouts.Main.SidebarNav.MenuItem.hoverBackgroundColor,
            color: theme.layouts.Main.SidebarNav.MenuItem.hoverFontColor,
        },

        "& svg": {
            color: theme.layouts.Main.SidebarNav.MenuItem.iconColor,
            width: "18px",
            height: "18px",
            // transform: "translateY(1px)",
            // marginRight: "22px",
        },
    },
    listItemText: {
        marginLeft: "-15px",
        // marginBottom: "-7px",
        // marginTop: "7px",
        "& > span": {
            fontWeight: theme.layouts.Main.SidebarNav.MenuItem.fontWeight,
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
        // <div className={classes.root}>
        <List
            component="nav"
            {...rest}
            className={clsx(classes.root, className)}
        >
            {sidebarNavItems.map((menuItem) => (
                <div key={`key-${menuItem.slug}`}>
                    {/^https?:\/\/(.*)/.test(menuItem.slug) ? (
                        <a
                            className={classes.link}
                            href={menuItem.slug}
                            target="_blank"
                            key={`key-${menuItem.slug}`}
                        >
                            <ListItem
                                button
                                className={classes.listItem}
                                disableGutters
                                key={`key-${menuItem.slug}`}
                            >
                                <ListItemIcon
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    {iconObj[menuItem.icon]}
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={intl.formatMessage({
                                        id: `sidebarMenu.${menuItem.slug.replace(
                                            /\//g,
                                            ""
                                        )}.title`,
                                    })}
                                />
                            </ListItem>
                        </a>
                    ) : (
                        <Link
                            className={classes.link}
                            to={
                                menuItem.slug === "/"
                                    ? menuItem.slug
                                    : `/${menuItem.slug.replace(/\//g, "")}/`
                            }
                            activeClassName={classes.active}
                            key={`key-${menuItem.slug}`}
                        >
                            <ListItem
                                button
                                className={classes.listItem}
                                disableGutters
                                key={`key-${menuItem.slug}`}
                            >
                                <ListItemIcon
                                    style={{
                                        color: "inherit",
                                    }}
                                >
                                    {iconObj[menuItem.icon]}
                                </ListItemIcon>
                                <ListItemText
                                    className={classes.listItemText}
                                    primary={intl.formatMessage({
                                        id: `sidebarMenu.${menuItem.slug.replace(
                                            /\//g,
                                            ""
                                        )}.title`,
                                    })}
                                />
                            </ListItem>
                        </Link>
                    )}
                </div>
            ))}
        </List>
    )
}

SidebarNav.propTypes = {
    className: PropTypes.string,
    sidebarNavItems: PropTypes.array.isRequired,
}

export default injectIntl(SidebarNav)
