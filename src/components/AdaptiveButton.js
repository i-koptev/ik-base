import React from "react"
import clsx from "clsx"

import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    root: {
        background: `linear-gradient(45deg, ${theme.sections.hero.ctaButton.gradientColor1} 30%, ${theme.sections.hero.ctaButton.gradientColor2} 90%)`,
        border: 0,
        borderRadius: 50,
        boxShadow: theme.sections.hero.ctaButton.boxShadow,
        color: "white",
        // height: 48,
        padding: "8px 50px",
        transition: "0.5s",
        "&:hover": {
            background: `linear-gradient(45deg, ${theme.sections.hero.ctaButton.gradientColor2} 30%, ${theme.sections.hero.ctaButton.gradientColor1} 90%)`,
            boxShadow: "none",
        },
    },
}))

function AdaptiveButton(props) {
    const { color, className, ...rest } = props
    const classes = useStyles(props)
    return <Button className={clsx(classes.root, className)} {...rest} />
}

// AdaptiveButton.propTypes = {
//     color: PropTypes.oneOf(["blue", "red"]).isRequired,
// }

export default AdaptiveButton
