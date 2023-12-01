import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        color: #292929; 
        width: 100vw;
        height: 100vh;
        
        box-sizing: border-box;
        background: linear-gradient(113deg, rgba(255,255,255,1) 0%, rgba(240,242,238,1) 28%, rgba(70,97,115,1) 100%);

        @media (min-width: 1024px) {
            padding: 40px 6vw;
        }

        @media (min-width: 1441px) {
            padding: 40px 10vw;
        }

        @media (min-width: 1921px) {
            padding: 10vh 14vw;
        }
    }
`;
