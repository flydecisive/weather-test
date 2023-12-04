import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        color: #32383F; 
        width: 100vw;
        min-height: 100vh;
        
        box-sizing: border-box;
        background: linear-gradient(135deg,rgba(162,224,249,.8) 5%,rgba(206,245,252,.3) 39%,rgba(234,250,235,.8) 70%,rgba(254,252,211,.7) 88%,rgba(253,244,186,.8) 100%);;

        @media (min-width: 1024px) {
            padding: 40px 6vw;
        }

        @media (min-width: 1441px) {
            padding: 40px 10vw;
        }

        @media (min-width: 1921px) {
            padding: 40px 14vw;
        }

        @media (max-width: 376px) {
            padding: 20px 4vw;
            min-height: 100dvh;
        }
    }
`;
