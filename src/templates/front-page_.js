import React from "react"

const frontPage = (props) => {
    return (
        <div>
            <h3 style={{ paddingLeft: "2rem" }}>{__filename}</h3>

            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}

export default frontPage
