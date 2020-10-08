import palette from "./palette"

const siteTextFontFamily = ""
const siteTextFontWeight = ""

const headingsFontFamily =
    "'Playfair Display', 'Open Sans', Roboto, Times, serif" //h1, h2, h3, h4, h5, h6
const headingsLetterSpacing = "0.01rem"
const headingsWeight = 200

export default {
    root: {
        color: "tomato",
    },
    fontSize: 14,
    // htmlFontSize: 16,
    h1: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    h2: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    h3: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    h4: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    h5: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    h6: {
        fontFamily: headingsFontFamily,
        fontWeight: headingsWeight,
        color: palette.headingsColor,
        letterSpacing: headingsLetterSpacing,
    },
    body1: {
        // fontSize: "1rem",
    },
    body2: {
        // fontSize: "1rem",
    },

    fontFamily: [
        "Open Sans",
        "Roboto",
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
