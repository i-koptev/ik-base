import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { useStaticQuery, graphql } from "gatsby"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(4),
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
        },
    },
    header: {
        padding: "1rem",
    },
    htmlContent: {
        "& h1": {
            ...theme.typography.h3,
            // paddingBottom: `${theme.siteSpacing.aboutPage * 4}px`,
            paddingLeft: `${theme.siteSpacing.aboutPage * 8}px`,
            // fontFamily: "PT Sans Narrow",
            // fontWeight: 400,
            // color: "#fffc",
            // color: "#00f",
            // textAlign: "center",
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

const PageView = (props) => {
    const { pageContext, className, ...rest } = props

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

PageView.propTypes = {
    className: PropTypes.string,
}

export default PageView

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
                <b>Template:</b> {__filename}
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