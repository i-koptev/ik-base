import React from "react"

import clsx from "clsx"
import PropTypes from "prop-types"

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

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
        padding: "1rem",
        paddingBottom: "1em",
    },
    container: {
        // paddingTop: "1rem",
        // paddingBottom: "1rem",
        // backgroundColor: "#00ee0033",
        [theme.breakpoints.up("lg")]: {
            // paddingTop: "2rem",
            // paddingBottom: "2rem",
            // backgroundColor: "tomato",
        },
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

    const aniDiv = (props) => (
        <motion.div
            initial={{ x: "1vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
                delay: props.delay,
                type: "tween",
                duration: 0.7,
            }}
            whileHover={{
                scale: 1.2,
                // originX: 0.5,
                // originY: 0.5,
                color: "#f8e112",
            }}
            {...props}
        >
            {props.children}
        </motion.div>
    )

    const aniH2 = (props) => (
        <motion.h2
            initial={{ y: "-30px", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                delay: props.delay,
                type: "spring",
                duration: 0.7,
            }}
            whileHover={{
                scale: 1.2,
                // originX: 0.5,
                // originY: 0.5,
                color: "#f8e112",
            }}
            {...props}
        >
            {props.children}
        </motion.h2>
    )

    return (
        <section id="test" className={classes.root}>
            <Container
                maxWidth={theme.siteContainer.maxWidth}
                component="div"
                className={classes.container}
            >
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <Typography
                            className={classes.header}
                            variant="h2"
                            // component="h2"
                            component={aniH2}
                            align="center"
                        >
                            {title}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    spacing={adaptiveSpacing}
                    className={clsx(classes.cardContainer, "anistart")}
                >
                    {[0, 1, 2, 3, 4, 5].map((value, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={value}
                            component={aniDiv}
                            delay={index / 10}
                        >
                            {/* <div ref={(div) => (allCards[index] = div)}> */}
                            <Card className={clsx(classes.card, "test")}>
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
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    )
}

export default Projects
