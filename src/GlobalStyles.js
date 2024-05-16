import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html{
    color: #F7F7F7;
    font-family: Arial, sans-serif;
    background-color: #0E0D0D;
    box-sizing: border-box;
    }
    *,*::before,*::after{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        h1,h2,h3,h4,h5,h6,p{
            margin: 0;
            font-weight: 400;
            color: #FFFFFF;
        }
        strong{
            font-weight: 600;
        }
    }

    .container {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
`