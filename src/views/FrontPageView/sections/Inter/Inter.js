import React, { useContext } from "react"

import clsx from "clsx"
import PropTypes from "prop-types"
import { IntersectionObserver } from "../../../../components/Animated/IntersectionObserver"
// import { IntersectionContext } from "../../../../components/Animated/IntersectionObserver"
// import { motion } from "framer-motion"
import Box from "./Box"

const Inter = () => {
    return (
        <div>
            {[...Array(6).keys()].map((item, key) => (
                <IntersectionObserver key={key}>
                    <Box item={key} />
                </IntersectionObserver>
            ))}
        </div>
    )
}

export default Inter
