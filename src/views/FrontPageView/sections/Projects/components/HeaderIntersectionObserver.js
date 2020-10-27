import React, { useEffect, useState } from "react"
import { useIntersection } from "react-use"

export const HeaderIntersectionContext = React.createContext({ inView: false })

export const HeaderIntersectionObserver = ({
    children,
    reset = false, // if value set to true - observed element will reappear every time it shows up on the screen
}) => {
    const [inView, setInView] = useState(false)
    const intersectionRef = React.useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.3,
    })

    useEffect(() => {
        const inViewNow = intersection && intersection.intersectionRatio > 0
        if (inViewNow) {
            return setInView(inViewNow)
        } else if (reset) {
            return setInView(false)
        }
    }, [intersection, reset])
    return (
        <HeaderIntersectionContext.Provider value={{ inView }}>
            <div ref={intersectionRef}>{children}</div>
        </HeaderIntersectionContext.Provider>
    )
}
