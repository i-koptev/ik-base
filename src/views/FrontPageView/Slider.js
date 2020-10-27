import React, { useState } from "react"

import clsx from "clsx"

import { makeStyles, useTheme } from "@material-ui/styles"
import { Grid } from "@material-ui/core"
import Container from "@material-ui/core/Container"

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
// import "swiper/swiper-bundle.css"
import "swiper/swiper.scss"
import "swiper/components/navigation/navigation.scss"
import "swiper/components/pagination/pagination.scss"
import "swiper/components/scrollbar/scrollbar.scss"
import { Translate } from "@material-ui/icons"

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
        width: "100%",
        zIndex: 0,
        // marginBottom: 12,
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
                paddingBottom: 12,
            },
        },
    },
}))

const Slider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const classes = useStyles()
    const theme = useTheme()
    return (
        <Container
            maxWidth={theme.siteContainer.maxWidth}
            component="section"
            className={classes.sectionContainer}
        >
            <Swiper
                id="main"
                thumbs={{ swiper: thumbsSwiper }}
                tag="section"
                wrapperTag="ul"
                className={classes.root}
                spaceBetween={8}
                slidesPerView={1}
                speed={3000}
                navigation
                effect="fade"
                fadeEffect={{ crossFade: true }}
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: false }}
                autoplay={{
                    delay: "3500",
                    disableOnInteraction: "true",
                }}
                onInit={(swiper) => console.log("swiper initialized!", swiper)}
                onSlideChange={(swiper) =>
                    console.log("Slide index changed to:", swiper.activeIndex)
                }
                onSwiper={(swiper) => console.log(swiper)}
                onReachEnd={() => console.log("Swiper end reached")}
            >
                {[...Array(10).keys()].map((item, key) => (
                    <SwiperSlide key={`slide-${key}`} tag="li">
                        <img
                            style={{ width: "100%", objectFit: "cover" }}
                            src={`https://picsum.photos/id/${key + 1}/500/300`}
                            alt={`Slide ${key}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                id="thumbs"
                onSwiper={setThumbsSwiper}
                spaceBetween={16}
                slidesPerView={5}
            >
                {[...Array(10).keys()].map((item, key) => (
                    <SwiperSlide
                        key={`thumb-${key}`}
                        tag="li"
                        style={{ listStyleType: "none" }}
                    >
                        <img
                            style={{ width: "100%" }}
                            src={`https://picsum.photos/id/${key + 1}/163/100`}
                            alt={`Thumbnail ${key}`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Container>
    )
}

export default Slider
