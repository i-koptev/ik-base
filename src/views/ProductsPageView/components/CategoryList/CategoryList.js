import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"
import Button from "@material-ui/core/Button"
const CategoryList = ({ allCategoryObjectsList, setCategory }) => {
    return (
        <div>
            {allCategoryObjectsList.map((category, i) => (
                <Link
                    to={`/products/categories/${category.id}`}
                    style={{
                        textDecoration: "none",
                    }}
                >
                    <Button
                        fullWidth
                        key={`catKey-${i}`}
                        style={{
                            textDecoration: "none",

                            // height: "200px",
                            backgroundColor: "#333",
                            padding: "20px 0",
                            marginBottom: "5px",
                            // fontSize: "5rem",
                            fontWeight: 700,
                            color: "white",
                            textAlign: "center",
                        }}
                    >
                        {category.id}
                    </Button>
                </Link>
            ))}
            {/* <pre>{JSON.stringify(allCategoryList, null, 4)}</pre> */}
        </div>
    )
}

export default injectIntl(CategoryList)
