import React from "react"
import { motion } from "framer-motion"
import clsx from "clsx"

import { makeStyles, useTheme } from "@material-ui/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        fill: "currentColor",
        width: "1em",
        height: "1em",
        display: "inline-block",
        transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        flexShrink: 0,
        userSelect: "none",
    },
}))

const variants = {
    rotate: {
        rotate: [30, -30, 90, -90, 45, -45],
        transition: {
            repeat: Infinity,
            duration: 12,
            type: "tween",
            ease: "linear",
        },
    },
    stop: {},
}

const SettingsSVG = (props) => {
    const { className, rotate } = props
    const classes = useStyles()
    const theme = useTheme()

    return (
        <svg
            className={clsx(className, classes.root)}
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
        >
            <motion.path
                animate={rotate ? "rotate" : "stop"}
                variants={variants}
                d="M19.59,15.5L17.77,14.2C18.07,13.12 18.09,11.95 17.77,10.78L19.59,9.5L18.14,7L16.11,7.92C15.32,7.12 14.32,6.5 13.15,6.21L12.95,4H10.05L9.85,6.21C8.68,6.5 7.68,7.12 6.89,7.92L4.86,7L3.41,9.5L5.23,10.78C4.91,11.95 4.93,13.12 5.23,14.2L3.41,15.5L4.86,18L6.89,17.07C7.68,17.86 8.68,18.46 9.85,18.77L10.05,21H12.95L13.15,18.77C14.32,18.46 15.32,17.86 16.11,17.07L18.14,18L19.59,15.5M13.5,3C13.77,3 14,3.2 14,3.46L14.18,5.5C14.94,5.78 15.62,6.19 16.23,6.68L18.08,5.81C18.31,5.69 18.6,5.77 18.74,6L20.74,9.5C20.88,9.71 20.8,10 20.58,10.15L18.91,11.32C19.04,12.12 19.03,12.91 18.91,13.68L20.58,14.85C20.8,15 20.88,15.29 20.74,15.5L18.74,19C18.6,19.21 18.31,19.29 18.08,19.17L16.23,18.31C15.62,18.8 14.94,19.2 14.18,19.5L14,21.5C14,21.79 13.77,22 13.5,22H9.5C9.22,22 9,21.78 9,21.5L8.82,19.5C8.06,19.2 7.38,18.8 6.77,18.31L4.92,19.17C4.69,19.29 4.4,19.21 4.26,19L2.26,15.5C2.12,15.29 2.2,15 2.42,14.85L4.09,13.68C3.97,12.91 3.96,12.12 4.09,11.32L2.42,10.15C2.2,10 2.12,9.71 2.26,9.5L4.26,6C4.4,5.77 4.69,5.69 4.92,5.81L6.77,6.68C7.38,6.19 8.06,5.78 8.82,5.5L9,3.46C9,3.2 9.23,3 9.5,3H13.5M11.5,9C13.43,9 15,10.57 15,12.5C15,14.43 13.43,16 11.5,16C9.57,16 8,14.43 8,12.5C8,10.57 9.57,9 11.5,9M11.5,10C10.12,10 9,11.12 9,12.5C9,13.88 10.12,15 11.5,15C12.88,15 14,13.88 14,12.5C14,11.12 12.88,10 11.5,10Z"
            ></motion.path>
        </svg>
    )
}

export default SettingsSVG
