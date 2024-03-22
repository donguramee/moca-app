import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    @font-face {
   font-family: 'Roboto';
    font-style: normal;
    src: url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
    /* 여기에서 폰트 웨이트를 설정하여 폰트를 한 번에 가져옵니다. */
    font-weight: 400, 700;
}
@font-face {
        font-family: 'S-CoreDream';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-3Light.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    :root {
        /* 메인 색상 */
        --primary-color:#7CB45B;
        --primary-disabled-color:#B9D2AB;
        /* 폰트 색상 */
        --font-primary-color:#767676;
        --font-white-color:#fff;
        --font-placeholder-color:#DBDBDB;
        --font-message-color:#EB5757 ;
        font-family: 'Brugty Font', 'S-CoreDream',sans-serif;
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
        background-color:#f5f5f5;
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
