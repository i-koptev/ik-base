import { red } from "@material-ui/core/colors"
import { colors } from "@material-ui/core"
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles"
import { width } from "@material-ui/system"
import palette from "./palette"

import breakpoints from "./breakpoints"
import typography from "./typography"

// ----------- Theme Variables --------------

const siteContainerMaxWidth = "lg"
const siteBackground = ""
const siteBackgroundImage = ""

// ------------ Site Palette ---------------

const sitePaletteWhite = ""
const sitePaletteBlack = ""
const sitePaletteLightGrey = ""
const sitePaletteGrey = ""
const sitePaletteDarkGrey = ""
const sitePaletteMain = ""
const sitePaletteAccent = ""

// ------------- Typography ------------------

// ------------- Site Sections ---------------

// ------------- Main Navigation ------------------

// ------------- Main Navigation - Desktop Size ----------------
const mainNavigationBackgroundColor = "rgba(0, 20, 30, 0.7)"
const mainNavigationBorderBottom = "1px solid rgba(0,0,0, 0.001)"

const mainNavigationPinnedBackgroundColor = "rgba(0, 20, 30, 0.9)"
const mainNavigationPinnedBorderBottom = "1px solid rgba(0,0,0, 0.05)"

const mainNavigationUnpinnedBackgroundColor = ""
const mainNavigationUnpinnedBorderBottom = ""

const mainNavigationLinkColor = "rgba(232,232,232,0.8)"
const mainNavigationLinkActiveColor = "#ffbf55"
// const mainNavigationLinkActiveColor = 'rgba(232,232,232,1)';
const mainNavigationLinkHoverColor = "rgba(252,252,252,1)"
const mainNavigationLinkHoverUnderlineColor = ""

// ------------- Main Navigation Brand -----------------------
const mainNavigationBrandColor = mainNavigationLinkColor
const mainNavigationBrandHoverColor = mainNavigationLinkHoverColor

// ------------- Main Navigation - Mobile Size ----------------------
const mainNavigationMobileBackgroundColor = "transparent"
const mainNavigationMobileBoardColor = "rgba(0, 20, 30, 0.9)"
const mainNavigationMobileDividerColor = ""

const mainNavigationMobileLinkColor = mainNavigationLinkColor
const mainNavigationMobileLinkActiveColor = mainNavigationLinkActiveColor
const mainNavigationMobileLinkHoverColor = mainNavigationLinkHoverColor

// ----------- End Of Theme Variables --------------

// A custom theme for this app

const theme = createMuiTheme({
    breakpoints,
    typography,
    props: {
        // Name of the component ⚛️
        MuiButtonBase: {
            //IK- works!
            // The default props to change
            disableRipple: false, // if true - No more ripple, on the whole application 💣!
        },
    },

    overrides: {
        MuiDrawer: {
            // for navigation Mobile Bar
            root: {
                // backgroundColor: "#ff000033",
            },
            paperAnchorLeft: {
                // backgroundColor: 'transparent',
                // boxShadow: 'none',
            },
        },
        MuiButton: {
            root: {
                // border: "3px solid tomato !important",
                // borderRadius: "25px !important",
                // fontSize: "3rem", // differs from defining fz in label
            },
            label: {
                // color: "red",
                // fontSize: "3rem",
            },
        },
        // MuiIconButton: {
        //     root: {
        //         backgroundColor: "#ff0000",
        //         "&:hover": {
        //             backgroundColor: "#00ff00",
        //         },
        //     },
        // },

        // MuiToolbar: {
        //     root: {
        //         height: "200px",
        //     },
        // },

        MuiAppbar: {
            root: {
                // backgroundColor: "tomato",
                /*  '@media(min-width: 0px) and (orientation: landscape)': {
                    minHeight: '48px',
                },
                '@media(min-width: 600px)': {
                    minHeight: '54px',
                },
                '@media(min-width: 1200px)': {
                    minHeight: '64px',
                },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', */
            },
        },
    },

    mainNavigationBrandColor: mainNavigationBrandColor,
    mainNavigationBrandHoverColor: mainNavigationBrandHoverColor,
    mainNavigationBackgroundColor: mainNavigationBackgroundColor,
    mainNavigationBorderBottom: mainNavigationBorderBottom,
    mainNavigationLinkColor: mainNavigationLinkColor,
    mainNavigationLinkActiveColor: mainNavigationLinkActiveColor,
    mainNavigationLinkHoverColor: mainNavigationLinkHoverColor,

    mainNavigationPinnedBackgroundColor: mainNavigationPinnedBackgroundColor,
    mainNavigationPinnedBorderBottom: mainNavigationPinnedBorderBottom,

    mainNavigationUnpinnedBackgroundColor: mainNavigationUnpinnedBackgroundColor,

    mainNavigationMobileBoardColor: mainNavigationMobileBoardColor,
    mainNavigationMobileBackgroundColor: mainNavigationMobileBackgroundColor,
    mainNavigationMobileLinkColor: mainNavigationMobileLinkColor,
    mainNavigationMobileLinkActiveColor: mainNavigationMobileLinkActiveColor,
    mainNavigationMobileLinkHoverColor: mainNavigationMobileLinkHoverColor,
    siteSections: {
        primary: {
            main: "#00f",
        },
    },
    siteContainer: {
        maxWidth: siteContainerMaxWidth,
    },
    siteSpacing: {
        aboutPage: 4,
    },
    html: {
        paragraph: {
            color: palette.siteTextColor,
            fontWeight: 400,
            textIndent: "2em",
            textIndent: "3%",
        },
    },

    // palette: {
    //     primary: {
    //         main: "#556cd6",
    //         ikky: "#0f0",
    //     },
    //     secondary: {
    //         main: "#19857b",
    //     },
    //     error: {
    //         main: red.A400,
    //     },
    //     background: {
    //         default: "transparent",
    //         //   default: 'rgba(222, 228, 231, 0.9)',
    //     },
    // },
    sections: {
        blogRoll: {
            postCardBackground: "rgba(0, 41, 63, 0.7)",
            postCardTextColor: "rgba(255, 255, 255, 0.7)",
        },
    },
    layouts: {
        Main: {
            Topbar: {
                backgroundColor: palette.topbarBackgroundColor,
                pinnedBackgroundColor: palette.topbarPinnedBackgroundColor,
                boxShadow: "none",
                logoColor: palette.topbarLogoColor,
                mainNavigationLinkColor: palette.mainNavigationLinkColor,
                mainNavigationLinkHoverColor:
                    palette.mainNavigationLinkHoverColor,
                mainNavigationLinkActiveColor:
                    palette.mainNavigationLinkActiveColor,
                mainNavigationLinkActiveHoverColor:
                    palette.mainNavigationLinkActiveHoverColor,
                langSwitcherButtonColor: palette.langSwitcherButtonColor,
                langSwitcherButtonHoverColor:
                    palette.langSwitcherButtonHoverColor,
                langSwitcherButtonHoverOutlineColor:
                    palette.langSwitcherButtonHoverOutlineColor,
                burgerColor: palette.burgerColor,
            },
            Sidebar: {
                backgroundColor: palette.sidebarBackgroundColor,
                dividerColor: palette.sidebarDividerColor,
            },
            SidebarNav: {
                MenuItem: {
                    // --- ICONS ---
                    // iconColor: "#0f0", // font-active color will not match icon's color

                    // --- TEXT ---
                    fontColor: palette.sidebarFontColor,
                    fontWeight: "400",
                    hoverFontColor: palette.sidebarHoverFontColor,
                    hoverFontWeight: 200,

                    activeFontColor: palette.sidebarActiveFontColor,
                    activeHoverFontColor: palette.sidebarActiveHoverFontColor,
                    activeFontWeight: 500,

                    // --- TEXT BACKGROUND ---
                    hoverBackgroundColor: palette.sidebarHoverBackgroundColor,
                    // clickRippleBackgroundColor: "#00ff00",
                },
            },
        },
    },
})
export default responsiveFontSizes(theme)
