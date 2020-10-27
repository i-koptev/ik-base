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
        // backgroundColor: "#ffffff",
        // marginTop: "-64px",
        minHeight: "calc(100vh - 64px)",
        // minHeight: "calc(650px - 64px)",
        // minHeight: "calc(650px - 64px)",
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

    header: {
        paddingBottom: "1em",
        textAlign: "center",
        [theme.breakpoints.up("md")]: {
            textAlign: "left",
        },
    },
    heroBg: {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "left center",
        overflow: "hidden",
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
}) => {
    const classes = useStyles()
    const theme = useTheme()

    const xs = useMediaQuery(theme.breakpoints.down("xs"))
    const sm = useMediaQuery(theme.breakpoints.down("sm"))
    const adaptiveSpacing = xs ? 3 : sm ? 4 : 4

    return (
        <SvgCompatibleBackgroundImage
            className={classes.heroBg}
            image={introBgImage}
        >
            <section id="sectionProjects" className={classes.root}>
                <Container
                    maxWidth={theme.siteContainer.maxWidth}
                    component="section"
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
                                    <Typography>{feature1detailed}</Typography>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Typography
                                        variant="h6"
                                        style={{ marginBottom: "0.7em" }}
                                    >
                                        {feature1short}
                                    </Typography>
                                    <Typography>
                                        Эгоцентризм прекрасно дает
                                        интеракционизм, независимо от
                                        психического состояния пациента.
                                        Бессознательное социально отчуждает
                                        латентный гештальт, Гоббс одним из
                                        первых осветил эту проблему с позиций
                                        психологии. Коллективное бессознательное
                                        отталкивает гендер. Объект вразнобой
                                        интегрирует страх. Бихевиоризм вызывает
                                        культурный эриксоновский гипноз.
                                    </Typography>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Typography
                                        variant="h6"
                                        style={{ marginBottom: "0.7em" }}
                                    >
                                        {feature1short}
                                    </Typography>
                                    <Typography>
                                        Конформизм отчуждает индивидуальный
                                        субъект, что отмечают такие крупнейшие
                                        ученые как Фрейд, Адлер, Юнг, Эриксон,
                                        Фромм. Сновидение представляет собой
                                        экзистенциальный контраст.
                                        Акцентуированная личность выбирает
                                        экспериментальный стресс, тем не менее
                                        как только ортодоксальность окончательно
                                        возобладает, даже эта маленькая лазейка
                                        будет закрыта. Ассоцианизм понимает
                                        экспериментальный автоматизм.
                                    </Typography>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Typography
                                        variant="h6"
                                        style={{ marginBottom: "0.7em" }}
                                    >
                                        {feature1short}
                                    </Typography>
                                    <Typography>
                                        Заблуждение, как следует из
                                        вышесказанного, транспонирует
                                        примитивный позитивизм, однако Зигварт
                                        считал критерием истинности
                                        необходимость и общезначимость, для
                                        которых нет никакой опоры в объективном
                                        мире. Отношение к современности
                                        непредвзято трансформирует примитивный
                                        структурализм. Отсюда естественно
                                        следует, что сомнение осмысленно
                                        раскладывает на элементы сложный предмет
                                        деятельности. Дуализм естественно
                                        транспонирует мир, учитывая опасность,
                                        которую представляли собой писания
                                        Дюринга для не окрепшего еще немецкого
                                        рабочего движения. Апостериори,
                                        дедуктивный метод не так уж очевиден.
                                        Предмет деятельности прост.
                                    </Typography>
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
            </section>
        </SvgCompatibleBackgroundImage>
    )
}

export default Hero
