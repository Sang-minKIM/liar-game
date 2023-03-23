import "styled-components";

interface IDevice {
    mobile: string;
    tablet: string;
    laptop: string;
}

interface IFont {
    xLarge: string;
    large: string;
}
declare module "styled-components" {
    export interface DefaultTheme {
        black: string;
        blue: string;
        lightBlue: string;
        gray: string;
        darkGray: string;
        white: string;
        deviceSizes: IDevice;
        fontSize: IFont;
    }
}
