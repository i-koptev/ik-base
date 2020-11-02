import palette from "./palette"

const siteTextFontFamily = ""
const siteTextFontWeight = ""

const headingsFontFamily =
    "Oswald, Roboto, 'Open Sans','Playfair Display', Times, serif" //h1, h2, h3, h4, h5, h6
const headingsLetterSpacing = "0.03em"
const headingsWeight = 700

const sharedHeadingStyles = {
    fontFamily: headingsFontFamily,
    fontWeight: headingsWeight,
    color: palette.headingsColor,
    letterSpacing: headingsLetterSpacing,
    textTransform: "uppercase",
}

export default {
    root: {
        color: "tomato",
    },
    fontSize: 14,
    // htmlFontSize: 16,
    h1: { ...sharedHeadingStyles },
    h2: {
        ...sharedHeadingStyles,
        // textTransform: "lowercase",
    },
    h3: { ...sharedHeadingStyles },
    h4: { ...sharedHeadingStyles },
    h5: { ...sharedHeadingStyles },
    h6: { ...sharedHeadingStyles },
    body1: {
        // fontSize: "1rem",
    },
    body2: {
        // fontSize: "1rem",
    },

    fontFamily: [
        "Roboto",
        "Open Sans",
        '"Segoe UI"',
        "PT Sans",
        "Arial",
        "sans-serif",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Helvetica Neue"',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(","),
}
