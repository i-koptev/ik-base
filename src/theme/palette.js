import { colors } from "@material-ui/core"
import Color from "color"

const mainColor = Color("#F63854")
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
    // topbarBackgroundColor: `${mainColor}`,
    topbarBackgroundColor: `transparent`,
    topbarPinnedBackgroundColor: `${black.fade(0.95)}`,
    topbarLogoColor: `${mainColor}`,

    mainNavigationLinkColor: `${black.fade(0.15)}`,
    mainNavigationLinkHoverColor: `${mainColor}`,
    mainNavigationLinkActiveColor: `${mainColor.lighten(0.2)}`,
    mainNavigationLinkActiveHoverColor: `${mainColor}`,

    langSwitcherButtonColor: `${mainColor.fade(0.25)}`,
    langSwitcherButtonHoverColor: `${mainColor}`,
    langSwitcherButtonHoverOutlineColor: `${mainColor.fade(0.75)}`,
    burgerColor: `${mainColor.fade(0.25)}`,
    //
    // --- Sidebar ---
    //
    // // --- Light ---
    sidebarBackgroundColor: `${white}`,
    sidebarDividerColor: `${mainColor.fade(0.75)}`,
    sidebarFontColor: `${black.fade(0.15)}`,
    sidebarHoverBackgroundColor: `${black.fade(0.95)}`,
    sidebarHoverFontColor: `${accentColor.fade(0.25)}`,
    sidebarActiveFontColor: `${accentColor.fade(0.15)}`,
    sidebarActiveHoverFontColor: `${accentColor}`,
    // --- Dark ---
    // sidebarBackgroundColor: `${mainColor}`,
    // sidebarDividerColor: `${white.fade(0.55)}`,
    // sidebarFontColor: `${white.fade(0.15)}`,
    // sidebarHoverBackgroundColor: `${white.fade(0.85)}`,
    // sidebarHoverFontColor: `${white}`,
    // sidebarActiveFontColor: `${accentColor.lighten(0.2)}`,
    // sidebarActiveHoverFontColor: `${accentColor}`,
}
