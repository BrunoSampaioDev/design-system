declare const colors: {
    white: string;
    black: string;
    gray100: string;
    gray200: string;
    gray400: string;
    gray500: string;
    gray600: string;
    gray700: string;
    gray800: string;
    gray900: string;
    green300: string;
    green500: string;
    green700: string;
    green900: string;
    Blue50: string;
    Blue100: string;
    Blue200: string;
    Blue300: string;
    Blue400: string;
    Blue500: string;
    Blue600: string;
    Blue700: string;
    Blue800: string;
    Red50: string;
    Red100: string;
    Red200: string;
    Red300: string;
    Red400: string;
    Red500: string;
    Red600: string;
    Red700: string;
    Red800: string;
    Red900: string;
};

declare const fontSizes: {
    xxs: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
    '9xl': string;
};

declare const fontWeights: {
    regular: string;
    medium: string;
    bold: string;
};

declare const fonts: {
    default: string;
    code: string;
};

declare const lineHeights: {
    shorter: string;
    short: string;
    base: string;
    tall: string;
};

declare const radii: {
    px: string;
    xs: string;
    sm: string;
    md: string;
    lg: string;
    full: string;
};

declare const space: {
    '1': string;
    '2': string;
    '3': string;
    '4': string;
    '5': string;
    '6': string;
    '7': string;
    '8': string;
    '10': string;
    '12': string;
    '16': string;
    '20': string;
    '40': string;
    '64': string;
    '80': string;
};
type SpaceToken = keyof typeof space;

export { SpaceToken, colors, fontSizes, fontWeights, fonts, lineHeights, radii, space };
