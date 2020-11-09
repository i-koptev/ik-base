import React from "react"

import { Hero, Projects, Team } from "./sections"
import Slider from "./Slider"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: "-56px",
        [theme.breakpoints.up("sm")]: {
            marginTop: "-65px",
        },
    },
}))

const FrontPageView = ({
    viewSectionHeroData,
    viewSectionProjectsData,
    viewSectionTeamData,
}) => {
    const classes = useStyles()
    // const theme = useTheme()
    return (
        <>
            <Hero {...viewSectionHeroData} className={classes.root} />
            <Projects {...viewSectionProjectsData} />
            <Team {...viewSectionTeamData} />
            <Slider />
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
