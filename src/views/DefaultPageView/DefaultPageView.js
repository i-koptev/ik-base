import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import {
    changeLocale,
    injectIntl,
    Link,
    FormattedMessage,
} from "gatsby-plugin-intl"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#eee",
        marginTop: "-56px",
        [theme.breakpoints.up("sm")]: {
            marginTop: "-65px",
        },
    },
    sectionContainer: {
        backgroundColor: "#fff",
        paddingTop: `56px`,
        [theme.breakpoints.up("sm")]: {
            paddingTop: `65px`,
        },
    },
    header: {
        padding: "1rem",
    },
    htmlContent: {
        "& h1, h2, h3, h4, h5, h6": {
            textAlign: "center",
        },
        "& h1": { ...theme.typography.h1 },
        "& h2": { ...theme.typography.h2 },
        "& h3": { ...theme.typography.h3 },
        "& h4": { ...theme.typography.h4 },
        "& h5": { ...theme.typography.h5 },
        "& h6": {
            ...theme.typography.h6,
            // fontFamily: "PT Sans Narrow",
            // fontWeight: 400,
            // textShadow:
            //     "3px 3px 10px rgba(255,0,0,0.5), -3px -3px 10px rgba(0,0,255,0.5)",
        },
        "& p": {
            ...theme.html.paragraph,
        },
        "& .alignleft": {
            float: "left",
            margin: "1rem",
            marginRight: "2.5rem",
            marginLeft: 0,
            display: "flow-root",
        },
        "& .alignleft:after": {
            content: ".",
            display: "block",
            height: 0,
            clear: "both",
            visibility: "hidden",
        },
        "& .gatsby-image-wrapper ": {
            border: "10px solid #fff",
            boxShadow: "3px 3px 10px 3px rgba(0,0,0,0.2)",
            // width: "30% !important",
            // boxShadow:
            //     " 3px 3px 10px 2px rgba(255,0,0,0.5), -3px -3px 10px 2px rgba(0,0,255,0.5)",
        },
    },
}))

const DefaultPageView = (props) => {
    const { pageContext, className, intl, data, ...rest } = props

    const classes = useStyles()

    // const {
    //     data: {
    //         markdownRemark: { id, { fields: slug }  },
    //     },
    // } = props.data ? props : null

    return (
        <Grid
            container
            spacing={4}
            // {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid item xs={12}>
                <Typography
                    className={classes.header}
                    variant="h3"
                    component="h1"
                    align="center"
                >
                    {pageContext.slug}
                </Typography>
                {/* <Typography
                    className={classes.htmlContent}
                    component="div"
                    dangerouslySetInnerHTML={{
                        __html: content,
                    }}
                /> */}
            </Grid>
            <Grid item xs={12}>
                <DebugDataContext {...props} />
            </Grid>
        </Grid>
    )
}

DefaultPageView.propTypes = {
    className: PropTypes.string,
}

export default injectIntl(DefaultPageView)

export const DebugDataContext = (props) => {
    const { pageContext = null, data = null } = props

    return (
        <div
            style={{
                fontSize: "16px",
                backgroundColor: "#345",
                color: "#eee",
                padding: "1rem",
                display: "block",
            }}
        >
            <pre>
                <b>View:</b> {__filename}
            </pre>
            <pre>
                <b>Page context:</b>
                <br />
                {JSON.stringify(pageContext, null, 2)}
            </pre>
            <pre>
                <b>Page data:</b>
                <br />
                {JSON.stringify(data, null, 2)}
            </pre>
            <pre>
                <b>All Props:</b>
                {JSON.stringify(props, null, 2)}
            </pre>
        </div>
    )
}
