import React, { useContext } from "react"

import { motion } from "framer-motion"
import { IntersectionContext } from "../../IntersectionObserver"

const Headers = (props) => {
    const { inView } = useContext(IntersectionContext)
    const variants = {
        hidden: {
            y: "-50px",
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.3,
                duration: 1,
                type: "spring",
            },
        },
    }
    switch (props.animatedComponent) {
        case "h1":
            return (
                <motion.h1
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}
                    {...props}
                >
                    {props.children}
                </motion.h1>
            )

        case "h2":
            return (
                <motion.h2
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}
                    {...props}
                >
                    {props.children}
                </motion.h2>
            )
        case "h3":
            return (
                <motion.h3
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}
                    {...props}
                >
                    {props.children}
                </motion.h3>
            )

        default:
            return (
                <motion.h4
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    variants={variants}
                    {...props}
                >
                    {props.children}
                </motion.h4>
            )
    }
}

export default Headers
