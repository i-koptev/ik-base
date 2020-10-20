import React, { useContext } from "react"

import clsx from "clsx"
import PropTypes from "prop-types"
import { IntersectionObserver } from "../../../../components/Animated/IntersectionObserver"
import { IntersectionContext } from "../../../../components/Animated/IntersectionObserver"
import { motion } from "framer-motion"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"

import SvgCompatibleImage from "../../../../components/SvgCompatibleImage"
import SvgCompatibleBackgroundImage from "../../../../components/SvgCompatibleBackgroundImage"

import { AnimatedHeader } from "../../../../components/Animated/Typography"
const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#efefef",
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
    card: {
        height: 240,
        // borderRadius: 20,
        boxShadow: " 0 0 12px #F4F4F4",
        transition: "all 0.3s ease-in-out 0s",
        "&:hover": {
            boxShadow: "0 10px 22px 10px rgba(27, 38, 49, 0.1)",
        },
        // width: 200,
    },
    header: {
        // padding: "1rem",
        paddingBottom: "1em",
    },

    // cardContainer: {
    //     paddingRight: "5vw",
    //     paddingLeft: "5vw",
    //     [theme.breakpoints.up("sm")]: {
    //         paddingRight: "15vw",
    //         paddingLeft: "15vw",
    //     },
    //     [theme.breakpoints.up("md")]: {
    //         paddingRight: "10vw",
    //         paddingLeft: "10vw",
    //     },
    //     [theme.breakpoints.up("lg")]: {
    //         paddingRight: "20px",
    //         paddingLeft: "20px",
    //     },
    // },
    avatar: {
        backgroundColor: "transparent",
        border: "2px solid red",
        transition: "background, color 0.5s",
        color: "red",
        "&:hover": {
            backgroundColor: "red",
            color: "white",
        },
    },
}))

const Projects = ({ title, subtitle }) => {
    const classes = useStyles()
    const theme = useTheme()

    const xs = useMediaQuery(theme.breakpoints.down("xs"))
    const sm = useMediaQuery(theme.breakpoints.down("sm"))
    const adaptiveSpacing = xs ? 3 : sm ? 4 : 4

    const AniDiv = (props) => {
        const { inView } = useContext(IntersectionContext)

        const variants = {
            hidden: {
                x: "100px",
                opacity: 0,
            },
            show: {
                x: 0,
                opacity: 1,
                transition: {
                    delay: props.delay,
                    type: "spring",
                    duration: 2,
                },
            },
        }
        return (
            <motion.div
                initial="hidden"
                // animate="show"
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
                        <IntersectionObserver>
                            <Typography
                                className={classes.header}
                                variant="h2"
                                component={AnimatedHeader}
                                animatedComponent="h2"
                                align="center"
                            >
                                {title}
                            </Typography>
                        </IntersectionObserver>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    spacing={adaptiveSpacing}
                    className={clsx(classes.cardContainer, "anistart")}
                >
                    {[...Array(6).keys()].map((value, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={value}
                            // component={AniDiv}
                        >
                            {/* <div ref={(div) => (allCards[index] = div)}> */}
                            <IntersectionObserver>
                                <AniDiv delay={index / 7}>
                                    <Card
                                        className={clsx(classes.card, "test")}
                                    >
                                        <CardHeader
                                            avatar={
                                                <Avatar
                                                    aria-label="project"
                                                    className={classes.avatar}
                                                >
                                                    {index}
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="settings">
                                                    <MoreVertIcon />
                                                </IconButton>
                                            }
                                            title="IBM website redesign"
                                            subheader="September 14, 2016"
                                        />
                                    </Card>
                                </AniDiv>
                            </IntersectionObserver>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

export default Projects
