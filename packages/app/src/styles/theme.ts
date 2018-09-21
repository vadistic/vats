import { createTheme, ITheme } from 'office-ui-fabric-react/lib/Styling'

export interface IThemeProps {
  theme: ITheme
}

export const defaultThemeNone = createTheme({
  palette: {
    black: '#201f1e', // default hover text
    neutralDark: '#201f1e', // default pressed text
    neutralLight: '#edebe9', // default hover bg
    neutralLighter: '#f3f2f1', // default background, disabled background
    neutralLighterAlt: '#f8f8f8',
    neutralPrimary: '#323130', // default text
    neutralPrimaryAlt: '#3c3c3c',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralSecondary: '#605e5c', // focus border
    neutralTertiary: '#a19f9d', // disabled text
    neutralTertiaryAlt: '#c8c6c4', // default pressed background
    primaryBackground: '#ffffff',
    primaryText: '#333333',
    suiteBarBackground: '#0078d4',
    suiteBarDisabledText: '#eaeaea',
    suiteBarText: '#ffffff',
    themeAccent: '#0078d4',
    themeAccentTranslucent10: 'rgba(0, 120, 212, 0.10)',
    themeDark: '#005a9e', // primary pressed background
    themeDarkAlt: '#106ebe', // primary hover background
    themeDarker: '#004578', // link hover,active, active:hover
    themeLight: '#c7e0f4',
    themeLightAlt: '#88cbff',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    themePrimary: '#0078d4', // primary background, link color
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeTertiaryAlt: '#88cbff',
    topBarBackground: 'rgba(234, 234, 234, 0.78)',
    topBarHoverText: '#333333',
    topBarText: '#666666',
    white: '#ffffff', // primary text
  },
})

export const defaultThemeNeutral = createTheme({
  palette: {
    black: '#201f1e', // default hover text
    neutralDark: '#201f1e', // default pressed text
    neutralLight: '#c8c6c4', // default hover bg
    neutralLighter: '#e1dfdd', // default background, disabled background
    neutralLighterAlt: '#eaeaea',
    neutralPrimary: '#323130', // default text
    neutralPrimaryAlt: '#3c3c3c',
    neutralQuaternary: '#d0d0d0',
    neutralQuaternaryAlt: '#dadada',
    neutralSecondary: '#605e5c', // focus border
    neutralTertiary: '#a19f9d', // disabled text
    neutralTertiaryAlt: '#a19f9d', // default pressed background
    primaryBackground: '#ffffff',
    primaryText: '#333333',
    suiteBarBackground: '#0078d4',
    suiteBarDisabledText: '#eaeaea',
    suiteBarText: '#ffffff',
    themeAccent: '#0078d4',
    themeAccentTranslucent10: 'rgba(0, 120, 212, 0.10)',
    themeDark: '#005a9e', // primary pressed background
    themeDarkAlt: '#106ebe', // primary hover background
    themeDarker: '#004578', // link hover,active, active:hover
    themeLight: '#c7e0f4',
    themeLightAlt: '#88cbff',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    themePrimary: '#0078d4', // primary background, link color
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeTertiaryAlt: '#88cbff',
    topBarBackground: 'rgba(234, 234, 234, 0.78)',
    topBarHoverText: '#333333',
    topBarText: '#666666',
    white: '#ffffff', // primary text
  },
})

export const defaultThemeSoft = createTheme({
  palette: {
    black: '#201f1e', // default hover text
    neutralDark: '#201f1e', // default pressed text
    neutralLight: '#deecf9', // default hover bg
    neutralLighter: '#ffffff', // default background, disabled background
    neutralLighterAlt: '#c7e0f4',
    neutralPrimary: '#323130', // default text
    neutralPrimaryAlt: '#3c3c3c',
    neutralQuaternary: '#106ebe',
    neutralQuaternaryAlt: '#0078d4',
    neutralSecondary: '#605e5c', // focus border
    neutralTertiary: '#71afe5', // disabled text
    neutralTertiaryAlt: '#c7e0f4', // default pressed background
    primaryBackground: '#ffffff',
    primaryText: '#333333',
    themeAccent: '#0078d4',
    themeAccentTranslucent10: 'rgba(0, 120, 212, 0.10)',
    themeDark: '#005a9e', // primary pressed background
    themeDarkAlt: '#106ebe', // primary hover background
    themeDarker: '#004578', // link hover,active, active:hover
    themeLight: '#c7e0f4',
    themeLightAlt: '#88cbff',
    themeLighter: '#deecf9',
    themeLighterAlt: '#eff6fc',
    themePrimary: '#0078d4', // primary background, link color
    themeSecondary: '#2b88d8',
    themeTertiary: '#71afe5',
    themeTertiaryAlt: '#88cbff',
    topBarBackground: 'rgba(234, 234, 234, 0.78)',
    topBarHoverText: '#333333',
    topBarText: '#666666',
    white: '#ffffff', // primary text
  },
})

export const defaultThemeStrong = createTheme({
  palette: {
    black: '#f8f8f8', // default hover text
    neutralDark: '#f4f4f4', // default pressed text
    neutralLight: '#106ebe', // default hover bg
    neutralLighter: '#0078d4', // default background, disabled background
    neutralLighterAlt: '#2b88d8',
    neutralPrimary: '#ffffff', // default text
    neutralPrimaryAlt: '#eaeaea',
    neutralQuaternary: '#eff6fc',
    neutralQuaternaryAlt: '#deecf9',
    neutralSecondary: '#faf9f8', // focus border
    neutralTertiary: '#71afe5', // disabled text
    neutralTertiaryAlt: '#004578', // default pressed background
    themeDark: '#c7e0f4', // primary pressed background
    themeDarkAlt: '#deecf9', // primary hover background
    themeDarker: '#ffffff', // link hover,active, active:hover
    themeLight: '#dadada',
    themeLighter: '#d0d0d0',
    themeLighterAlt: '#c8c8c8',
    themePrimary: '#ffffff', // primary background, link color
    themeSecondary: '#f4f4f4',
    themeTertiary: '#eaeaea',
    white: '#0078d4', // primary text
  },
})

export const darkThemeNone = createTheme({
  palette: {
    themePrimary: '#3a96dd', // primary background, link color
    themeLighterAlt: '#020609',
    themeLighter: '#061118',
    themeLight: '#112d43',
    themeTertiary: '#235a85',
    themeSecondary: '#3385c3',
    themeDarkAlt: '#4ba0e1', // primary hover background
    themeDark: '#8ac2ec', // primary pressed background
    themeDarker: '#8ac2ec', // link hover,active, active:hover
    neutralLighterAlt: '#292827',
    neutralLighter: '#1f1f1f', // default background, disabled background
    neutralLight: '#3f3f3f', // default hover bg
    neutralQuaternaryAlt: '#484644',
    neutralQuaternary: '#605e5c',
    neutralTertiaryAlt: '#4f4f4f', // default pressed background
    neutralTertiary: '#6d6d6d', // disabled text
    neutralSecondary: '#f8f8f8', // focus border
    neutralPrimaryAlt: '#e1dfdd',
    neutralPrimary: '#ffffff', // default text
    neutralDark: '#ffffff', // default pressed text
    black: '#ffffff', // default hover text
    white: '#1f1f1f', // primary text
    primaryBackground: '#252423',
    primaryText: '#ffffff',
    bodyBackground: '#252423',
    bodyText: '#ffffff',
    disabledBackground: '#252423',
    disabledText: '#1e1d1c',
  },
})

export const darkThemeNeutral = createTheme({
  palette: {
    themePrimary: '#3a96dd', // primary background, link color
    themeLighterAlt: '#020609',
    themeLighter: '#061118',
    themeLight: '#112d43',
    themeTertiary: '#235a85',
    themeSecondary: '#3385c3',
    themeDarkAlt: '#4ba0e1', // primary hover background
    themeDark: '#8ac2ec', // primary pressed background
    themeDarker: '#8ac2ec', // link hover,active, active:hover
    neutralLighterAlt: '#292827',
    neutralLighter: '#313131', // default background, disabled background
    neutralLight: '#484848', // default hover bg
    neutralQuaternaryAlt: '#484644',
    neutralQuaternary: '#605e5c',
    neutralTertiaryAlt: '#6d6d6d', // default pressed background
    neutralTertiary: '#6d6d6d', // disabled text
    neutralSecondary: '#f8f8f8', // focus border
    neutralPrimaryAlt: '#e1dfdd',
    neutralPrimary: '#ffffff', // default text
    neutralDark: '#ffffff', // default pressed text
    black: '#ffffff', // default hover text
    white: '#1f1f1f', // primary text
    primaryBackground: '#252423',
    primaryText: '#ffffff',
    bodyBackground: '#252423',
    bodyText: '#ffffff',
    disabledBackground: '#252423',
    disabledText: '#1e1d1c',
  },
})

export const darkThemeSoft = createTheme({
  palette: {
    themePrimary: '#3a96dd', // primary background, link color
    themeLighterAlt: '#020609',
    themeLighter: '#061118',
    themeLight: '#112d43',
    themeTertiary: '#235a85',
    themeSecondary: '#3385c3',
    themeDarkAlt: '#4ba0e1', // primary hover background
    themeDark: '#8ac2ec', // primary pressed background
    themeDarker: '#8ac2ec', // link hover,active, active:hover
    neutralLighterAlt: '#292827',
    neutralLighter: '#091823', // default background, disabled background
    neutralLight: '#112d43', // default hover bg
    neutralQuaternaryAlt: '#484644',
    neutralQuaternary: '#605e5c',
    neutralTertiaryAlt: '#235a85', // default pressed background
    neutralTertiary: '#007291', // disabled text
    neutralSecondary: '#f8f8f8', // focus border
    neutralPrimaryAlt: '#e1dfdd',
    neutralPrimary: '#ffffff', // default text
    neutralDark: '#ffffff', // default pressed text
    black: '#ffffff', // default hover text
    white: '#1f1f1f', // primary text
    primaryBackground: '#252423',
    primaryText: '#ffffff',
    bodyBackground: '#252423',
    bodyText: '#ffffff',
    disabledBackground: '#252423',
    disabledText: '#1e1d1c',
  },
})

export const darkThemeStrong = createTheme({
  palette: {
    buttonBorder: '#ff0000',
    themePrimary: '#1f1f1f', // primary background, link color
    themeLighterAlt: '#020609',
    themeLighter: '#061118',
    themeLight: '#112d43',
    themeTertiary: '#235a85',
    themeSecondary: '#3385c3',
    themeDarkAlt: '#112d43', // primary hover background
    themeDark: '#235a85', // primary pressed background
    themeDarker: '#8ac2ec', // link hover,active, active:hover
    neutralLighterAlt: '#292827',
    neutralLighter: '#3a96dd', // default background, disabled background
    neutralLight: '#4ba0e1', // default hover bg
    neutralQuaternaryAlt: '#484644',
    neutralQuaternary: '#605e5c',
    neutralTertiaryAlt: '#8ac2ec', // default pressed background
    neutralTertiary: '#235a85', // disabled text
    neutralSecondary: '#1f1f1f', // focus border
    neutralPrimaryAlt: '#e1dfdd',
    neutralPrimary: '#1f1f1f', // default text
    neutralDark: '#1f1f1f', // default pressed text
    black: '#1f1f1f', // default hover text
    white: '#ffffff', // primary text
    primaryBackground: '#252423',
    primaryText: '#ffffff',
    bodyBackground: '#252423',
    bodyText: '#ffffff',
    disabledBackground: '#252423',
    disabledText: '#1e1d1c',
  },
})
