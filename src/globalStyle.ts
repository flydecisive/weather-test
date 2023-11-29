import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    #root {
        color: #292929; 
        width: 100vw;
        min-height: 100vh;
        padding: 60px 80px;
        box-sizing: border-box;
        background: rgb(255,255,255);
        background: linear-gradient(113deg, rgba(255,255,255,1) 0%, rgba(240,242,238,1) 28%, rgba(70,97,115,1) 100%);
    }
`;
