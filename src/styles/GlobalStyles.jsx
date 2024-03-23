import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/abrilfatface/v13/zOL64pLDlL1D99S8g8PtiKVggez9NBs2QBBbGUYlhMRdwrM.ttf') format('ttf');
  }

    :root {
        /* 메인 색상 */
        --primary-color:#E6DCC1;
        --back-color:#f2f2f2;
        --primary-disabled-color:#B9D2AB;
        /* 폰트 색상 */
        --font-primary-color:#EA4F0D;
        --font-nomal-color:#060000;
        --font-white-color:#fff;
        --font-placeholder-color:#DBDBDB;
        --font-message-color:#EB5757 ;
        font-family:"Abril Fatface",sans-serif;
    }

    .a11y-hidden {
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
    }
    ${reset}
    body {
        display:flex;
        justify-content:center;
        align-items:center;
        height: 100vh;
        background-color:var(--back-color);
    }
    img {
        vertical-align: top;
    }
    a{
        text-decoration: none;
        color:inherit;
        font-family: 'S-CoreDream', sans-serif;
    }
    button{
        border:none;
        background-color:inherit;
        padding:0;
        font-family: 'S-CoreDream', sans-serif;
    }
    input{
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            transition: background-color 5000s ease-in-out 0s;
            -webkit-transition: background-color 9999s ease-out;
            -webkit-box-shadow: 0 0 0px 1000px 'var(--white);' inset !important;
            -webkit-text-fill-color: 'var(--white);' !important;
        }
        font-family: 'S-CoreDream', sans-serif;
        
       
    }
`;

export default GlobalStyles;
