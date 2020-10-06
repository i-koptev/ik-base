import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

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

const FrontPageView = ({
    className,
    heroImage,
    introBgImage,
    header,
    subheader,
    feature1short,
    feature1detailed,
    feature2short,
    feature2detailed,
    feature3short,
    feature3detailed,
    feature4short,
    feature4detailed,
}) => {
    const classes = useStyles()

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
                    variant="h1"
                    component="h1"
                    align="center"
                >
                    {header}
                </Typography>
                <h4>{subheader}</h4>
                <p>{feature1short}</p>
                <div
                    dangerouslySetInnerHTML={{
                        __html: feature1detailed,
                    }}
                />
            </Grid>
        </Grid>
    )
}

export default FrontPageView

// FrontPageView.propTypes = {
//     className: PropTypes.string,
//     header: PropTypes.string,
//     emailLabel: PropTypes.string,
//     email: PropTypes.string,
//     addressLabel: PropTypes.string,
//     address: PropTypes.string,
//     phoneNumberLabel: PropTypes.string,
//     phone: PropTypes.string,
// }
