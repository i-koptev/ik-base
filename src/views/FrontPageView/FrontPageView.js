import React from "react"

import { Hero, Projects } from "./sections"

const FrontPageView = ({ viewSectionHeroData, viewSectionProjectsData }) => {
    return (
        <>
            <Projects {...viewSectionProjectsData} />
            <Hero {...viewSectionHeroData} />
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
