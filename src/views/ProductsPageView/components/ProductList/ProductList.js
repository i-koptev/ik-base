import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { injectIntl, Link } from "gatsby-plugin-intl"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Typography from "@material-ui/core/Typography"

import Paper from "@material-ui/core/Paper"
import Card from "@material-ui/core/Card"

import { motion, AnimatePresence } from "framer-motion"
import { CSSTransitionGroup } from "react-transition-group"
import "./test.css"

import SvgCompatibleImage from "../../../../components/SvgCompatibleImage"

const useStyles = makeStyles((theme) => ({
    root: {
        // border: "1px solid black",
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
        },
        marginBottom: "1rem",
    },
    test: {
        height: "300px",
    },
}))

const ProductList = ({ products, category, intl }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} md={2}>
                {intl.formatMessage({
                    id: `category.${category}`,
                })}
            </Grid>
            <Grid item xs={12} md={4}>
                <Paper
                    style={{
                        borderRadius: "0",
                        backgroundColor: "#ccc",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    Photo goes here
                </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
                <Grid container spacing={1}>
                    {products.map((product, index) => {
                        return (
                            <Grid item xs={12} md={6} key={`product-${index}`}>
                                <Card style={{ border: "1px solid #ccc" }}>
                                    <Link
                                        to={product.slug}
                                        style={{
                                            // padding: "1rem",
                                            textDecoration: "none",
                                            backgroundColor: "#333",
                                            color: "white",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            style={{
                                                color: "inherit",
                                                textAlign: "center",
                                                padding: "1rem",
                                                backgroundColor: "inherit",
                                                textDecoration: "none",
                                            }}
                                        >
                                            {product.title}
                                        </Typography>
                                    </Link>
                                    {/* <div
                                        style={{
                                            padding: "1rem",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {" "}
                                        category: {product.category}
                                    </div> */}

                                    <div className={classes.test}>
                                        <SvgCompatibleImage
                                            image={product.featuredImage}
                                            alt={product.featuredImage.alt}
                                            // image={product.cardImages[0]}
                                            // alt={product.cardImages[0].alt}
                                        />
                                    </div>
                                    <Grid container spacing={0}>
                                        <Grid
                                            item
                                            xs={4}
                                            style={{
                                                height: "100px",
                                                // backgroundColor: "tomato",
                                                // marginTop: "8px",
                                            }}
                                        >
                                            <SvgCompatibleImage
                                                image={product.cardImages[0]}
                                                alt={product.cardImages[0].alt}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            style={{
                                                height: "100px",
                                                // backgroundColor: "tomato",
                                                // marginTop: "8px",
                                            }}
                                        >
                                            <SvgCompatibleImage
                                                image={product.cardImages[1]}
                                                alt={product.cardImages[1].alt}
                                            />
                                        </Grid>
                                        <Grid
                                            item
                                            xs={4}
                                            style={{
                                                height: "100px",
                                                // backgroundColor: "tomato",
                                                // marginTop: "8px",
                                            }}
                                        >
                                            <SvgCompatibleImage
                                                image={product.cardImages[2]}
                                                alt={product.cardImages[2].alt}
                                            />
                                        </Grid>
                                    </Grid>

                                    <div>id: {product.id}</div>
                                    <div>
                                        Short Description:{" "}
                                        {product.shortDescription}
                                    </div>
                                    <div>Description:</div>

                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: product.description,
                                        }}
                                    />

                                    <div>Price: {product.price}€</div>
                                </Card>
                            </Grid>
                        )
                    })}
                    {/* <Grid item xs={12}>
                ProductList
                <pre>{JSON.stringify(products, null, 4)}</pre>
            </Grid> */}
                </Grid>
            </Grid>
        </Grid>
    )
}

export default injectIntl(ProductList)
