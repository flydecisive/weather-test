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
    }
`;
