import React, { useState } from "react"
import clsx from "clsx"
import PropTypes from "prop-types"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Tabs from "@material-ui/core/Tabs"
import Tab from "@material-ui/core/Tab"

import { ProductList, CategoryList } from "./components"

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

const ProductsPageView = ({
    className,
    pageHeader,
    pageSubheader,
    allProductsList,
    allCategoryObjectsList,
}) => {
    const classes = useStyles()
    const theme = useTheme()

    // const filteredByCategoryProducts =
    //     !!allProductsList &&
    //     allProductsList.filter((product) =>
    //         // categories.includes(product.frontmatter.productCategory)
    //         categories.includes(product.categoryId)
    //     )

    const filterProductListByCategory = (list, category) => {
        if (list)
            return list.filter((listItem) => listItem.categoryId === category)
    }

    return (
        <div className={classes.root}>
            <Container
                maxWidth={theme.siteContainer.maxWidth}
                // {...rest}
                className={clsx(classes.sectionContainer, className)}
            >
                <Grid container spacing={0} style={{ marginBottom: "1rem" }}>
                    <Grid item xs={12}>
                        <Typography
                            className={classes.header}
                            variant="h3"
                            component="h3"
                            align="center"
                        >
                            {pageHeader}
                        </Typography>
                        <Typography
                            className={classes.subheader}
                            variant="h6"
                            component="h6"
                            align="center"
                        >
                            {pageSubheader}
                        </Typography>

                        {/* <pre>{JSON.stringify(allProductsList, null, 4)}</pre> */}
                    </Grid>
                </Grid>

                {/* --- SLIDER --- */}
                <Grid container spacing={1} style={{ marginBottom: "1rem" }}>
                    <Grid item xs={12} md={2}>
                        {" "}
                        <CategoryList
                            allCategoryObjectsList={allCategoryObjectsList}
                        />
                    </Grid>
                    <Grid item xs={12} md={10}>
                        <div
                            style={{
                                height: "300px",
                                backgroundColor: "#333",
                                padding: "50px",
                                fontSize: "5rem",
                                fontWeight: 700,
                                color: "white",
                                textAlign: "center",
                            }}
                        >
                            SLIDER
                        </div>
                    </Grid>
                </Grid>

                {allCategoryObjectsList.map((category) => {
                    const products = filterProductListByCategory(
                        allProductsList,
                        category.id
                    )
                    return (
                        <ProductList
                            products={products.slice(0, 2)}
                            // products={products}
                            category={category.id}
                            key={`key-${category.id}`}
                        />
                    )
                })}
            </Container>
        </div>
    )
}

ProductsPageView.propTypes = {
    className: PropTypes.string,
}

export default ProductsPageView
