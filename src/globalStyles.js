import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', san-serif;
    }

    html, body {
        font-size: 16px;
        overflow-x: initial;
    }

    @media screen and (max-width: 768px) {
        html {
            font-size: 12px;
        }
    }
`;

export default GlobalStyle;
