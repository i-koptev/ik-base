import React, { useContext } from "react"

import clsx from "clsx"
import PropTypes from "prop-types"
import { IntersectionObserver } from "../../../../components/Animated/IntersectionObserver"
import { IntersectionContext } from "../../../../components/Animated/IntersectionObserver"
import { motion } from "framer-motion"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/styles"
import { CardActionArea, Grid } from "@material-ui/core"
import CardActions from "@material-ui/core/CardActions"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"

import IconButton from "@material-ui/core/IconButton"
import { AnimatedHeader } from "../../../../components/Animated/Typography"

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

        [theme.breakpoints.up("md")]: {
            paddingTop: "3.5rem",
            paddingBottom: "3.5rem",
            // backgroundColor: "tomato",
        },
    },
    sectionHeader: {
        paddingBottom: "1.2em",
    },
    cardContainer: {},
    card: {},
    cardActionArea: {
        [theme.breakpoints.up("md")]: {
            display: "flex",
        },
    },
    cardMedia: {
        height: 300,
        [theme.breakpoints.up("md")]: {
            flex: "0 0 33.33%",
        },
    },
    cardContentWrapper: {
        minHeight: "10rem",
        paddingTop: "1.5rem",
        paddingBottom: "2rem",
        // [theme.breakpoints.up("md")]: {
        //     alignSelf: "flex-start",
        // },
        [theme.breakpoints.up("md")]: {
            flex: "0 0 66.66%",
            padding: "10px 60px 0 20px",
            alignSelf: "flex-start",
        },
    },

    cardHeader: {
        // [theme.breakpoints.up("md")]: {},
        paddingBottom: "0.2em",
        borderBottom: "1px solid #ff000077",
    },
    cardText: {},
}))

const Team = (props) => {
    const { team } = props

    const classes = useStyles()
    const theme = useTheme()

    const xs = useMediaQuery(theme.breakpoints.down("xs"))
    const sm = useMediaQuery(theme.breakpoints.down("sm"))
    const adaptiveSpacing = xs ? 3 : sm ? 4 : 4

    const AniDiv = (props) => {
        const { inView } = useContext(IntersectionContext)

        const variants = sm
            ? {
                  hidden: {
                      y: "-30px",
                      opacity: 0,
                  },
                  show: {
                      y: 0,
                      opacity: 1,
                      transition: {
                          delay: props.delay,
                          type: "spring",
                          duration: 1.5,
                      },
                  },
              }
            : {
                  hidden: {
                      x: "50px",
                      opacity: 0,
                  },
                  show: {
                      x: 0,
                      opacity: 1,
                      transition: {
                          delay: props.delay,
                          type: "spring",
                          duration: 1.5,
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
        <section id="sectionTeam" className={classes.root}>
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
                                className={classes.sectionHeader}
                                variant="h2"
                                component={AnimatedHeader}
                                animatedComponent="h2"
                                align="center"
                            >
                                HC-Title
                            </Typography>
                        </IntersectionObserver>
                    </Grid>
                </Grid>
                <Grid
                    container
                    justify="center"
                    spacing={adaptiveSpacing}
                    className={classes.cardContainer}
                >
                    {/* {[...Array(6).keys()].map((value, index) => ( */}
                    {team.map((member, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={8}
                            md={8}
                            lg={6}
                            key={`project-${index}`}
                            // component={AniDiv}
                        >
                            {/* <div ref={(div) => (allCards[index] = div)}> */}
                            <IntersectionObserver>
                                <AniDiv delay={index / 7}>
                                    <Card className={classes.card}>
                                        <CardActionArea
                                            className={classes.cardActionArea}
                                        >
                                            <CardMedia
                                                className={classes.cardMedia}
                                                component="img"
                                                alt="Contemplative Reptile"
                                                image="https://picsum.photos/id/3/300/200"
                                                title="Contemplative Reptile"
                                            />
                                            <div
                                                className={
                                                    classes.cardContentWrapper
                                                }
                                            >
                                                <CardContent
                                                    className={
                                                        classes.cardContent
                                                    }
                                                >
                                                    <Typography
                                                        className={
                                                            classes.cardHeader
                                                        }
                                                        gutterBottom
                                                        variant="h5"
                                                        component="h2"
                                                    >
                                                        {`${member.firstName} ${member.secondName}`}
                                                    </Typography>

                                                    <Typography
                                                        className={
                                                            classes.cardText
                                                        }
                                                        variant="body2"
                                                        color="textSecondary"
                                                        component="p"
                                                    >
                                                        Lizards are a widespread
                                                        group of squamate
                                                        reptiles, with over
                                                        6,000 species, ranging
                                                        across all continents
                                                        except Antarctica.
                                                    </Typography>
                                                </CardContent>
                                            </div>
                                        </CardActionArea>
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

export default Team
