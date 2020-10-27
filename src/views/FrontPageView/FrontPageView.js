import React from "react"

import { Hero, Projects, GsapProjects, Inter, Team } from "./sections"
import Slider from "./Slider"
// import Test from "./Test"

const FrontPageView = ({
    viewSectionHeroData,
    viewSectionProjectsData,
    viewSectionTeamData,
}) => {
    return (
        <>
            {/* <Test /> */}
            <Hero {...viewSectionHeroData} />
            <Projects {...viewSectionProjectsData} />
            <GsapProjects {...viewSectionProjectsData} />
            <Team {...viewSectionTeamData} />
            <Slider />
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
