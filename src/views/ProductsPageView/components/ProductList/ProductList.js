import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

const ProductList = ({ products }) => {
    return (
        <div>
            ProductList
            <pre>{JSON.stringify(products, null, 4)}</pre>
        </div>
    )
}

export default injectIntl(ProductList)
