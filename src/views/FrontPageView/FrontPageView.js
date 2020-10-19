import React from "react"

import { Hero, Projects, Inter } from "./sections"
// import Test from "./Test"

const FrontPageView = ({ viewSectionHeroData, viewSectionProjectsData }) => {
    return (
        <>
            {/* <Test /> */}
            <Hero {...viewSectionHeroData} />
            <Projects {...viewSectionProjectsData} />
            <Inter />
        </>
    )
}

export default FrontPageView

// FrontPageView.propTypes = {
//     className: PropTypes.string,
//     header: PropTypes.string,
//     emailLabel: PropTypes.string,
//     email: PropTypes.string,
//     addressLabel: PropTypes.string,
//     address: PropTypes.string,
//     phoneNumberLabel: PropTypes.string,
//     phone: PropTypes.string,
// }
