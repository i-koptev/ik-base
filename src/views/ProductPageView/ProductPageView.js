import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import SvgCompatibleImage from "../../components/SvgCompatibleImage"
import SvgCompatibleBackgroundImage from "../../components/SvgCompatibleBackgroundImage"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
        },
    },
    hero: {
        // [theme.breakpoints.up("md")]: {
        //     minHeight: "calc(100vh - 64px)",
        // },

        position: "relative",
        // minHeight: "calc(80vh - 64px)",
        // height: "calc(100vh - 64px)",
        // minHeight: "400px",
        // [theme.breakpoints.up("md")]: {
        //     paddingBottom: "3rem",
        // },
        height: "100%",
        width: "100%",
        // backgroundImage: `url(${wavybg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
    },
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "0px",
        left: "0px",
        /* background: #0c0808; */
        backgroundImage:
            "linear-gradient(to top,rgba(0, 20, 30, 0),rgba(0, 20, 30, 0.9))",
        /* opacity: 0.9; */
        zIndex: "1",
        overflow: "hidden",
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

const ProductPageView = ({
    className,
    id,
    title,
    category,
    price,
    featuredImage,
    image1,
    image2,
    image3,
    shortDescription,
    description,
    featuredImageAlt,
    image1Alt,
    image2Alt,
    image3Alt,
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
                    {title}
                </Typography>
                <h4>{shortDescription}</h4>
                <p>{description}</p>
                <pre>{JSON.stringify(featuredImage, null, 4)}</pre>

                <div style={{ height: "300px", width: "100vw" }}>
                    <SvgCompatibleBackgroundImage
                        className={classes.hero}
                        image={image1}
                    >
                        <div className={classes.overlay}></div>
                    </SvgCompatibleBackgroundImage>
                </div>
                {/* <div
                    dangerouslySetInnerHTML={{
                        __html: feature1detailed,
                    }}
                /> */}
            </Grid>
        </Grid>
    )
}

export default ProductPageView

// ProductPageView.propTypes = {
//     className: PropTypes.string,
//     header: PropTypes.string,
//     emailLabel: PropTypes.string,
//     email: PropTypes.string,
//     addressLabel: PropTypes.string,
//     address: PropTypes.string,
//     phoneNumberLabel: PropTypes.string,
//     phone: PropTypes.string,
// }
