import React, { useContext } from "react"

import clsx from "clsx"
import PropTypes from "prop-types"
import { IntersectionObserver } from "../../../../components/Animated/IntersectionObserver"
import { IntersectionContext } from "../../../../components/Animated/IntersectionObserver"
import { motion } from "framer-motion"
import Typography from "@material-ui/core/Typography"

const Box = ({ item }) => {
    const box = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "300px",
        backgroundColor: "#cce",
        margin: "3rem 15vw",
        fontSize: "5rem",
    }

    const { inView } = useContext(IntersectionContext)

    const variants = {
        hidden: {
            scale: 0.9,
            y: "-20px",
            opacity: 0,
        },
        show: {
            scale: 1,
            y: "0",
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1,
                type: "spring",
            },
        },
    }
    return (
        <motion.div
            style={box}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            // animate="show"
            exit="hidden"
            variants={variants}
        >
            <h2>{item + 1}</h2>
        </motion.div>
    )
}

export default Box
