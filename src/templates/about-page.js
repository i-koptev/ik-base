import React from "react"

const aboutPage = (props) => {
    return (
        <div>
            About page template
            <pre>{JSON.stringify(props, null, 4)}</pre>
        </div>
    )
}

export default aboutPage
