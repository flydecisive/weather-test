import { createGlobalStyle } from "styled-components";
import RobotoRegular from "./Roboto-Regular.ttf";
import RobotoMedium from "./Roboto-Medium.ttf";
import RobotoBold from "./Roboto-Bold.ttf";
import RobotoBlack from "./Roboto-Black.ttf";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'Roboto';
        font-weight: 400;
        font-style: normal;
        font-display: swap;
        src: url(${RobotoRegular});
        src: url(${RobotoRegular}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        src: url(${RobotoMedium});
        src: url(${RobotoMedium}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 700;
        font-style: normal;
        font-display: swap;
        src: url(${RobotoBold});
        src: url(${RobotoBold}) format('truetype');
    }

    @font-face {
        font-family: 'Roboto';
        font-weight: 800;
        font-style: normal;
        font-display: swap;
        src: url(${RobotoBlack});
        src: url(${RobotoBlack}) format('truetype');
    }
`;

export default GlobalFonts;
