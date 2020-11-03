import React, { useState } from "react"
import clsx from "clsx"

import { Hero, Projects, GsapProjects, Inter, Team } from "./sections"
import Slider from "./Slider"
// import Test from "./Test"

import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import Observer from "@researchgate/react-intersection-observer"

import UpIcon from "@material-ui/icons/KeyboardArrowUp"
import Fab from "@material-ui/core/Fab"
import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    fab: {
        transition: "opacity 1000ms linear",
        position: "fixed",
        bottom: "30px",
        right: "30px",
        opacity: 0,
        width: "48px",
        height: "48px",
        [theme.breakpoints.up("sm")]: {
            width: "56px",
            height: "56px",
        },
    },
    fabVisible: {
        transition: "opacity 1500ms linear",
        opacity: 0.8,
        color: "#777",
        "&:hover": {
            opacity: 1,
            color: "black",
        },
        // zIndex: 1000,
    },
}))

const FrontPageView = ({
    viewSectionHeroData,
    viewSectionProjectsData,
    viewSectionTeamData,
}) => {
    gsap.registerPlugin(ScrollToPlugin)
    const handleScrollToTop = () =>
        gsap.to(window, { duration: 0.5, scrollTo: 0 })

    const [fabVisible, setFabVisible] = useState(false)

    const handleShowFab = (event) => setFabVisible(event.isIntersecting)

    // const showFab = () => {
    //     gsap.to(window, { duration: 0.5, scrollTo: 0 })
    // }

    const classes = useStyles()
    const theme = useTheme()
    return (
        <>
            {/* <Test /> */}
            <Hero {...viewSectionHeroData} />
            <Observer
                onChange={handleShowFab}
                // threshold="0.5"
                // threshold={thresholds}
            >
                <div>
                    <Projects {...viewSectionProjectsData} />
                    <GsapProjects {...viewSectionProjectsData} />
                    <Team {...viewSectionTeamData} />
                    <Slider />
                    <Inter />
                </div>
            </Observer>
            <Fab
                large
                onClick={handleScrollToTop}
                className={
                    fabVisible
                        ? clsx(classes.fab, classes.fabVisible)
                        : classes.fab
                }
            >
                <UpIcon />
            </Fab>
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
