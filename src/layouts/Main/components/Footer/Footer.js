import React from "react"
import PropTypes from "prop-types"

import {
    changeLocale,
    injectIntl,
    Link,
    FormattedMessage,
} from "gatsby-plugin-intl"

import clsx from "clsx"
import { makeStyles, useTheme } from "@material-ui/styles"
import Container from "@material-ui/core/Container"
import { Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const Footer = (props) => {
    const { className, ...rest } = props

    const classes = useStyles()
    const theme = useTheme()

    return (
        <Container
            maxWidth={theme.siteContainer.maxWidth}
            component="footer"
            {...rest}
            className={clsx(classes.root, className)}
        >
            <Typography variant="body1">
                &copy;{" "}
                <Link component="a" href="#" target="_blank">
                    IK-Base
                </Link>
                . 2020
            </Typography>
            <Typography variant="caption">Created with ❤.</Typography>
        </Container>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
}

export default Footer
