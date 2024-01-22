import { FontFamily } from '../../theme/typography'

const Light = {
    fontFamily: FontFamily.Light,
    fontSize: 12,
    color: 'black'
}

const Regular = {
    fontFamily: FontFamily.Regular,
    fontSize: 14,
    color: 'black'
}

const MEDIUM = {
    fontFamily: FontFamily.Medium,
    fontSize: 16,
    color: 'black',
}

const BOLD = {
    fontFamily: FontFamily.Bold,
    fontSize: 20,
    color: 'black'
}

const SEMI_BOLD = {
    fontFamily: FontFamily.SemiBold,
    fontSize: 20,
    color: 'black'
}


export const presets: any = {
    default: Light,
    title: {
        ...MEDIUM,
        fontSize: 14
    },
    title1: {
        ...MEDIUM,
        fontSize: 16
    },
    title2: {
        ...MEDIUM,
        fontSize: 18
    },
    h1: {
        ...BOLD,
        fontSize: 24
    },
    h2: {
        ...SEMI_BOLD,
        fontSize: 24
    },
    h3: {
        ...SEMI_BOLD,
        fontSize: 20
    },
    p: {
        ...Regular,
        fontSize: 14
    },
    p2: {
        ...Regular,
        fontSize: 16
    },
    small: {
        ...Light,
        fontSize: 14
    },
    Xsmall: {
        ...Light,
        fontSize: 12
    }
}