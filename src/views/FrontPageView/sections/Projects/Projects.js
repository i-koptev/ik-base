import React, { useContext } from "react"

import clsx from "clsx"
import PropTypes from "prop-types"
import { CardIntersectionObserver } from "./components/CardIntersectionObserver"
import { CardIntersectionContext } from "./components/CardIntersectionObserver"
import { HeaderIntersectionObserver } from "./components/HeaderIntersectionObserver"
import AnimatedHeader from "./components/AnimatedHeader"

import { motion } from "framer-motion"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Card from "@material-ui/core/Card"
import IconButton from "@material-ui/core/IconButton"

import { Coffee, Food } from "mdi-material-ui"
import { Camera, Settings } from "mdi-material-ui/light"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#f1f1f1",
    },
    sectionContainer: {
        // flexGrow: 1,
        paddingTop: "3rem",
        paddingBottom: "3rem",
        // backgroundColor: "#ee000033",
        [theme.breakpoints.up("lg")]: {
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem",
            // backgroundColor: "tomato",
        },
    },
    sectionHeader: {
        paddingBottom: "1em",
    },
    card: {
        minHeight: 240,
        padding: "20px",
        // borderRadius: 20,
        boxShadow: " 0 0 12px #F4F4F4",
        transition: "all 0.3s ease-in-out 0s",
        "&:hover": {
            boxShadow: "0 10px 22px 10px rgba(27, 38, 49, 0.1)",
            "& $iconButton": {
                backgroundColor: "red",
                color: "white",
            },
            "& $cardContentText": {
                opacity: "1",
            },
        },
        // width: 200,
    },
    cardHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardContentHeader: {
        padding: "1rem",
    },
    cardContentText: {
        paddingBottom: "1rem",
        opacity: "0.7",
    },
    iconButton: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: "1px solid #f1f1f1",
        transition: "background 0.7s",
        color: "red",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    icon: { fontSize: "36px" },
}))

const Projects = ({ title, subtitle, projects }) => {
    const classes = useStyles()
    const theme = useTheme()

    const lessThanXs = useMediaQuery(theme.breakpoints.down("xs"))
    const lessThanSm = useMediaQuery(theme.breakpoints.down("sm"))
    const adaptiveSpacing = lessThanXs ? 3 : lessThanSm ? 4 : 4

    // Do not try to move it to separate component - animation variants do not work
    const AnimatedDiv = (props) => {
        const { delay } = props
        const { inView } = useContext(CardIntersectionContext)

        const variants = lessThanSm
            ? {
                  hidden: { y: "-50px", opacity: 0 },
                  show: {
                      y: 0,
                      opacity: 1,
                      transition: {
                          delay: delay,
                          type: "spring",
                          duration: 1.5,
                      },
                  },
              }
            : {
                  hidden: { x: "50px", opacity: 0 },
                  show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                          delay: delay,
                          type: "spring",
                          duration: 1.5,
                      },
                  },
              }

        return (
            <motion.div
                initial="hidden"
                animate={inView ? "show" : "hidden"}
                variants={variants}
                {...props}
            >
                {props.children}
            </motion.div>
        )
    }

    return (
        <section id="sectionProjects" className={classes.root}>
            <Container
                maxWidth={theme.siteContainer.maxWidth}
                component="section"
                className={classes.sectionContainer}
            >
                {/* <Grid container justify="center"> */}
                <Grid container>
                    <Grid item xs={12}>
                        <HeaderIntersectionObserver>
                            <Typography
                                className={classes.sectionHeader}
                                variant="h2"
                                component={AnimatedHeader}
                                animatedComponent="h2"
                                align="center"
                            >
                                {title}
                            </Typography>
                        </HeaderIntersectionObserver>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    spacing={adaptiveSpacing}
                    className={clsx(classes.cardContainer, "anistart")}
                >
                    {/* {[...Array(6).keys()].map((value, index) => ( */}
                    {projects.map((project, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={`project-${index}`}
                        >
                            {/* <div ref={(div) => (allCards[index] = div)}> */}
                            <CardIntersectionObserver>
                                <AnimatedDiv delay={index / 7}>
                                    <Card className={clsx(classes.card)}>
                                        <div className={classes.cardHeader}>
                                            <IconButton
                                                aria-label="settings"
                                                className={classes.iconButton}
                                            >
                                                <Settings
                                                    className={classes.icon}
                                                />
                                            </IconButton>
                                        </div>
                                        <div className={classes.cardContent}>
                                            <Typography
                                                variant="h6"
                                                align="center"
                                                className={
                                                    classes.cardContentHeader
                                                }
                                            >
                                                {project.projectHeader}
                                            </Typography>
                                            <Typography
                                                // variant="h6"
                                                align="center"
                                                className={
                                                    classes.cardContentText
                                                }
                                            >
                                                {project.projectDescription}
                                            </Typography>
                                        </div>
                                    </Card>
                                </AnimatedDiv>
                            </CardIntersectionObserver>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

export default Projects
