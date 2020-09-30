import React from "react"

const frontPage = (props) => {
    return (
        <div>
            Front page template
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}

export default frontPage
