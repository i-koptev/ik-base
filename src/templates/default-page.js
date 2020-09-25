import React from "react"

const defaultPage = (props) => {
    return (
        <div>
            Page default template
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}

export default defaultPage
