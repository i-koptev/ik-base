import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
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

const ContactsPageView = ({
    className,
    heading,
    emailLabel,
    email,
    addressLabel,
    address,
    phoneNumberLabel,
    phone,
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
                    {heading}
                </Typography>
                <h4>
                    {emailLabel}: {email}
                </h4>
                <h4>{addressLabel}:</h4>
                <div
                    dangerouslySetInnerHTML={{
                        __html: address,
                    }}
                />
                <h4>
                    {phoneNumberLabel}: {phone}
                </h4>
            </Grid>
        </Grid>
    )
}

export default ContactsPageView

ContactsPageView.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    emailLabel: PropTypes.string,
    email: PropTypes.string,
    addressLabel: PropTypes.string,
    address: PropTypes.string,
    phoneNumberLabel: PropTypes.string,
    phone: PropTypes.string,
}
