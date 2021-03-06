import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { injectIntl, Link } from "gatsby-plugin-intl"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import { motion, AnimatePresence } from "framer-motion"
import { CSSTransitionGroup } from "react-transition-group"
import "./test.css"

import SvgCompatibleImage from "../../../../components/SvgCompatibleImage"

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up("lg")]: {
            // backgroundColor: "tomato",
        },
    },
    test: {
        height: "300px",
    },
}))

const ProductList = ({ products }) => {
    const classes = useStyles()
    const theme = useTheme()

    return (
        // <Grid container spacing={4}>
        <CSSTransitionGroup
            style={{
                boxSizing: "border-box",
                display: "flex",
                flexWrap: "wrap",
                width: "100%",
                width: "calc(100% + 32px)",
                margin: "-16px",
                transition: "transform 2s",
            }}
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={300}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
        >
            {products.map((product, index) => {
                return (
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={4}
                        key={`product-${index}`}
                        style={{ padding: "16px" }}
                    >
                        <Link to={product.slug}>
                            <Typography variant="h4">
                                {product.title}
                            </Typography>
                        </Link>
                        <div>category: {product.category}</div>

                        <div className={classes.test}>
                            <SvgCompatibleImage
                                image={product.featuredImage}
                                alt={product.featuredImage.alt}
                                // image={product.cardImages[0]}
                                // alt={product.cardImages[0].alt}
                            />
                        </div>
                        <Grid container spacing={1}>
                            <Grid
                                item
                                xs={4}
                                style={{
                                    height: "100px",
                                    // backgroundColor: "tomato",
                                    marginTop: "8px",
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
                                    marginTop: "8px",
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
                                    marginTop: "8px",
                                }}
                            >
                                <SvgCompatibleImage
                                    image={product.cardImages[2]}
                                    alt={product.cardImages[2].alt}
                                />
                            </Grid>
                        </Grid>

                        <div>id: {product.id}</div>
                        <div>Short Description: {product.shortDescription}</div>
                        <div>Description:</div>

                        <div
                            dangerouslySetInnerHTML={{
                                __html: product.description,
                            }}
                        />

                        <div>Price: {product.price}€</div>
                    </Grid>
                )
            })}
            <Grid item xs={12}>
                ProductList
                <pre>{JSON.stringify(products, null, 4)}</pre>
            </Grid>
        </CSSTransitionGroup>
        // </Grid>
    )
}

export default injectIntl(ProductList)
