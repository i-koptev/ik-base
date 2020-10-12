import { colors } from "@material-ui/core"
import Color from "color"

const mainColor = Color("#223344")
// const accentColor = Color("#F03C30")
const accentColor = Color("#f44336")
// const mainColor = Color("#553344")

const white = Color("#FFFFFF")
const black = Color("#000000")

export default {
    siteTextColor: `${black}`,
    headingsColor: `${mainColor.fade(0.25)}`,
    // headingsColor: `${secondaryColor}`,
    //
    // --- Topbar ---
    //
    topbarBackgroundColor: `${mainColor}`,
    topbarPinnedBackgroundColor: `${mainColor.fade(0.25)}`,
    topbarLogoColor: `${white.fade(0.25)}`,

    mainNavigationLinkColor: `${white.fade(0.25)}`,
    mainNavigationLinkHoverColor: `${white}`,
    mainNavigationLinkActiveColor: `${accentColor.lighten(0.2)}`,
    mainNavigationLinkActiveHoverColor: `${accentColor.lighten(0.3)}`,

    langSwitcherButtonColor: `${white.fade(0.25)}`,
    langSwitcherButtonHoverColor: `${white}`,
    langSwitcherButtonHoverOutlineColor: `${white.fade(0.75)}`,
    //
    // --- Sidebar ---
    //
    // // --- Light ---
    // sidebarBackgroundColor: `${white}`,
    // sidebarDividerColor: `${mainColor.fade(0.75)}`,
    // sidebarFontColor: `${mainColor.fade(0.25)}`,
    // sidebarHoverBackgroundColor: `${mainColor.fade(0.95)}`,
    // sidebarHoverFontColor: `${accentColor.fade(0.25)}`,
    // sidebarActiveFontColor: `${accentColor.fade(0.25)}`,
    // sidebarActiveHoverFontColor: `${accentColor}`,
    // --- Dark ---
    sidebarBackgroundColor: `${mainColor}`,
    sidebarDividerColor: `${white.fade(0.55)}`,
    sidebarFontColor: `${white.fade(0.15)}`,
    sidebarHoverBackgroundColor: `${white.fade(0.85)}`,
    sidebarHoverFontColor: `${white}`,
    sidebarActiveFontColor: `${accentColor.lighten(0.2)}`,
    sidebarActiveHoverFontColor: `${accentColor}`,
}
