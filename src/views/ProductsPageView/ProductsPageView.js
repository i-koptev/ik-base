import React from "react"
import clsx from "clsx"
import PropTypes from "prop-types"
import { ProductList, CategoryList } from "./components"

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

const ProductsPageView = ({
    className,
    pageHeader,
    pageSubheader,
    allProductsList,
    allCategoryList,
}) => {
    const classes = useStyles()
    const theme = useTheme()

    const [categories, setCategories] = React.useState(allCategoryList)
    const handleSetCategory = (cat) => setCategories(cat)

    const filteredByCategoryProducts =
        !!allProductsList &&
        allProductsList.filter((product) =>
            // categories.includes(product.frontmatter.productCategory)
            categories.includes(product.categoryId)
        )

    return (
        <Container
            maxWidth={theme.siteContainer.maxWidth}
            // {...rest}
            className={clsx(classes.root, className)}
        >
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography
                        className={classes.header}
                        variant="h1"
                        component="h1"
                        align="center"
                    >
                        {pageHeader}
                    </Typography>

                    <p>{pageSubheader}</p>
                    {/* <pre>{JSON.stringify(allProductsList, null, 4)}</pre> */}
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={12} md={2}>
                            <CategoryList
                                allCategoryList={allCategoryList}
                                setCategory={handleSetCategory}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12} md={10}>
                            {" "}
                            <ProductList
                                products={filteredByCategoryProducts}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

ProductsPageView.propTypes = {
    className: PropTypes.string,
}

export default ProductsPageView
