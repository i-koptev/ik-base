import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { injectIntl, Link } from "gatsby-plugin-intl"

const CategoryList = ({ allCategoryList, setCategory }) => {
    return (
        <div>
            Category List
            <h6 onClick={() => setCategory("all")}>All</h6>
            {allCategoryList.map((category, i) => (
                <h6 key={`catKey-${i}`} onClick={() => setCategory(category)}>
                    {category}
                </h6>
            ))}
            <pre>{JSON.stringify(allCategoryList, null, 4)}</pre>
        </div>
    )
}

export default injectIntl(CategoryList)
