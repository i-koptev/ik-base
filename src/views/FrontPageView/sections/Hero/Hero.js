import React from "react"

import clsx from "clsx"
import PropTypes from "prop-types"

import { IntersectionObserver } from "../../../../components/Animated/IntersectionObserver"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, {
    Navigation,
    Pagination,
    Thumbs,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay,
} from "swiper"
// import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import "swiper/components/effect-fade/effect-fade.scss"

import useMediaQuery from "@material-ui/core/useMediaQuery"
import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

import SvgCompatibleImage from "../../../../components/SvgCompatibleImage"
import SvgCompatibleBackgroundImage from "../../../../components/SvgCompatibleBackgroundImage"

import { AnimatedHeader } from "../../../../components/Animated/Typography"
import AdaptiveButton from "../../../../components/AdaptiveButton"

import HeroImage from "./HeroImage"

SwiperCore.use([
    Navigation,
    Pagination,
    Thumbs,
    Scrollbar,
    A11y,
    EffectFade,
    Autoplay,
])

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: "#fde",
        minHeight: "calc(100vh - 56px)",
        [theme.breakpoints.up("sm")]: {
            minHeight: "calc(100vh - 65px)",
        },
    },
    heroBg: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        overflow: "hidden",
    },
    sectionContainer: {
        // backgroundColor: "#eee",
        paddingTop: "calc(56px + 2.5rem)",
        paddingBottom: "3rem",
        [theme.breakpoints.up("sm")]: {
            minHeight: "calc(100vh - 65px)",
            paddingTop: "calc(65px + 16px + 2.5rem)",
        },

        [theme.breakpoints.up("lg")]: {
            paddingTop: "calc(65px + 16px + 3rem)",
            paddingBottom: "3.5rem",
            // backgroundColor: "tomato",
        },
    },

    header: {
        paddingBottom: "1em",
        textAlign: "center",

        [theme.breakpoints.down("xs")]: {
            fontSize: "1.8rem",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
            marginTop: "-1em",
        },
    },

    content: {
        [theme.breakpoints.up("md")]: {
            padding: "60px 0 80px",
        },
        [theme.breakpoints.up("lg")]: {
            padding: "80px 0 80px",
        },
    },
    heroImage: {
        paddingTop: "2rem",
        [theme.breakpoints.up("md")]: {
            paddingTop: 0,
        },
    },
    ctaButton: {
        marginTop: "2rem ",
        marginBottom: "2rem ",
        // marginLeft: "40%",

        [theme.breakpoints.up("sm")]: {
            marginTop: "3rem ",
            // marginLeft: "10%",
        },
        [theme.breakpoints.up("md")]: {
            // marginLeft: "15%",
        },
    },
    slider: {
        width: "100%",
        // height: "100%",
        zIndex: 0,
        paddingBottom: 35,
        "& .swiper": {
            "&-button-next, &-button-prev": {
                color: "white",
                fontWeight: "bold",
            },
            "&-wrapper": {
                paddingInlineStart: 0,
                listStyle: "none",
            },
            "&-slide": {
                paddingInlineStart: 0,
            },
            "&-pagination": {
                bottom: 10,
                // paddingBottom: 12,
                "&-bullet": {
                    width: "24px",
                    height: "4px",
                    borderRadius: 0,
                    color: "transparent",
                    backgroundColor:
                        theme.layouts.Main.Topbar.mainNavigationLinkColor,
                    opacity: 0.3,
                    "&-active": {
                        backgroundColor:
                            theme.layouts.Main.Topbar
                                .mainNavigationLinkActiveColor,
                        opacity: 1,
                    },
                },
            },
        },
    },
    htmlContent: {
        "& h1, h2, h3, h4, h5, h6": {
            textAlign: "center",
        },
        "& h1": { ...theme.typography.h1 },
        "& h2": { ...theme.typography.h2 },
        "& h3": { ...theme.typography.h3 },
        "& h4": { ...theme.typography.h4 },
        "& h5": { ...theme.typography.h5 },
        "& h6": {
            ...theme.typography.h6,
            // fontFamily: "PT Sans Narrow",
            // fontWeight: 400,
            // textShadow:
            //     "3px 3px 10px rgba(255,0,0,0.5), -3px -3px 10px rgba(0,0,255,0.5)",
        },
        "& p": {
            ...theme.html.paragraph,
        },
        "& .alignleft": {
            float: "left",
            margin: "1rem",
            marginRight: "2.5rem",
            marginLeft: 0,
            display: "flow-root",
        },
        "& .alignleft:after": {
            content: ".",
            display: "block",
            height: 0,
            clear: "both",
            visibility: "hidden",
        },
        "& .gatsby-image-wrapper ": {
            border: "10px solid #fff",
            boxShadow: "3px 3px 10px 3px rgba(0,0,0,0.2)",
            // width: "30% !important",
            // boxShadow:
            //     " 3px 3px 10px 2px rgba(255,0,0,0.5), -3px -3px 10px 2px rgba(0,0,255,0.5)",
        },
    },
    // overlay: {
    //     position: "absolute",
    //     width: "100%",
    //     height: "100%",
    //     top: "0px",
    //     left: "0px",
    //     /* background: #0c0808; */
    //     backgroundImage:
    //         "linear-gradient(to top,rgba(0, 20, 30, 0),rgba(0, 20, 30, 0.9))",
    //     /* opacity: 0.9; */
    //     zIndex: "1",
    //     overflow: "hidden",
    //     display: "flex",
    //     alignItems: "flex-center",
    //     justifyContent: "center",
    // },
    // bang: {
    //     color: "white",
    //     fontSize: "8rem",
    //     margin: 0,
    //     marginTop: "0.35em",
    //     padding: 0,
    //     [theme.breakpoints.up("lg")]: {
    //         fontSize: "10rem",
    //         marginTop: "0.15em",
    //     },
    // },
}))

const Hero = ({
    heroImage,
    introBgImage,
    heading,
    subheading,
    feature1short,
    feature1detailed,
    feature2short,
    feature2detailed,
    feature3short,
    feature3detailed,
    feature4short,
    feature4detailed,
    className,
}) => {
    const classes = useStyles()
    const theme = useTheme()

    const xs = useMediaQuery(theme.breakpoints.down("xs"))
    const sm = useMediaQuery(theme.breakpoints.down("sm"))
    const adaptiveSpacing = xs ? 3 : sm ? 4 : 4

    return (
        <SvgCompatibleBackgroundImage
            id="sectionHero"
            className={clsx(classes.heroBg, classes.root, className)}
            image={introBgImage}
        >
            <Container
                maxWidth={theme.siteContainer.maxWidth}
                // component="section"
                className={classes.sectionContainer}
            >
                <Grid
                    container
                    spacing={adaptiveSpacing}
                    className={classes.content}
                    // {...rest}
                    justify="center"
                >
                    <Grid item xs={11} sm={10} md={7}>
                        <IntersectionObserver>
                            <Typography
                                className={classes.header}
                                variant="h2"
                                component={AnimatedHeader}
                                animatedComponent="h1"
                                // align="center"
                            >
                                {heading}
                            </Typography>
                        </IntersectionObserver>
                        <Swiper
                            loop
                            id="main"
                            tag="section"
                            // wrapperTag="ul"
                            className={classes.slider}
                            // spaceBetween={8}
                            slidesPerView={1}
                            speed={2000}
                            // navigation
                            effect="fade"
                            fadeEffect={{ crossFade: true }}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: false }}
                            autoplay={{
                                delay: "3500",
                                disableOnInteraction: "true",
                            }}
                        >
                            <SwiperSlide>
                                <Typography
                                    variant="h6"
                                    style={{ marginBottom: "0.7em" }}
                                >
                                    {feature1short}
                                </Typography>
                                <div
                                    className={classes.htmlContent}
                                    dangerouslySetInnerHTML={{
                                        __html: feature1detailed,
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Typography
                                    variant="h6"
                                    style={{ marginBottom: "0.7em" }}
                                >
                                    {feature2short}
                                </Typography>
                                <div
                                    className={classes.htmlContent}
                                    dangerouslySetInnerHTML={{
                                        __html: feature2detailed,
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Typography
                                    variant="h6"
                                    style={{ marginBottom: "0.7em" }}
                                >
                                    {feature3short}
                                </Typography>
                                <div
                                    className={classes.htmlContent}
                                    dangerouslySetInnerHTML={{
                                        __html: feature3detailed,
                                    }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Typography
                                    variant="h6"
                                    style={{ marginBottom: "0.7em" }}
                                >
                                    {feature4short}
                                </Typography>
                                <div
                                    className={classes.htmlContent}
                                    dangerouslySetInnerHTML={{
                                        __html: feature4detailed,
                                    }}
                                />
                            </SwiperSlide>
                        </Swiper>
                        <AdaptiveButton className={classes.ctaButton}>
                            Test
                        </AdaptiveButton>
                    </Grid>

                    <Grid item xs={10} md={5}>
                        <HeroImage className={classes.heroImage} />
                    </Grid>

                    {/* <p>subheading: {subheading}</p>
                            <p>feature1short: {feature1short}</p>
                            <p>feature1detailed:</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: feature1detailed,
                                }}
                            />

                            <p>feature2short: {feature2short}</p>
                            <p>feature2detailed:</p>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: feature2detailed,
                                }}
                            /> */}

                    {/* 
                            <div style={{ height: "300px", width: "100%" }}>
                                <SvgCompatibleBackgroundImage
                                    className={classes.hero}
                                    image={introBgImage}
                                >
                                    <div className={classes.overlay}>
                                        <h2 className={classes.bang}>BANG!</h2>
                                    </div>
                                </SvgCompatibleBackgroundImage>
                            </div> */}
                </Grid>
            </Container>
        </SvgCompatibleBackgroundImage>
    )
}

export default Hero
