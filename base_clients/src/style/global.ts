import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    
    ul, ol, li{
        list-style: none;
    }
    
    input, select{
        background: transparent;
        border: none;
    }

    body {
        font-family: 'Inter', sans-serif;
        width: 100vw;
        height: 90vh;
        background-color: #121214;
    }

    :root{
        --color-primary: #3FE864;
        --color-primary-Focus: #3FE500;
        --color-primary-Negative: #154528;
        --color-Grey-4: #121214;
        --color-Grey-3: #212529;
        --color-Grey-2: #343B41;
        --color-Grey-1: #868E96;
        --color-Grey-0: #F8F9FA;
        --color-negative: #E83F5B;
        --color-sucess: #3FE864;
        --color-white: #FFFFFF
    }
`