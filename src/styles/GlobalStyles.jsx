import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import BrugtyDemoRegular from "../assets/fonts/BrugtyDemoRegular.ttf";
import Calfinedemo from "../assets/fonts/Calfinedemo.otf";

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Abril Fatface';
    font-style: normal;
    font-weight: 400;
    src: url('https://fonts.gstatic.com/s/abrilfatface/v13/zOL64pLDlL1D99S8g8PtiKVggez9NBs2QBBbGUYlhMRdwrM.ttf') format('ttf');
  }

@font-face {
        font-family: 'BrugtyDemoRegular';
        src: url(${BrugtyDemoRegular}) format('truetype');
}
 @font-face {
        font-family: 'Calfinedemo';
        src: url(${Calfinedemo}) format('truetype');
}
@font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    
    font-weight: 400;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Medium';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    
    font-weight: 500;
    font-style: normal;
}
@font-face {
    font-family: 'Pretendard-Bold';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    
    font-weight: 700;
    font-style: normal;
}


    :root {
        /* 메인 색상 */
        --primary-color:#E6DCC1;
        --secondary-color:#FD8F52;
        --back-color:#ececec;
        --primary-disabled-color:#EA4F0D;
        --primary-button-color:#006542;
        /* 폰트 색상 */
        --font-primary-color:#EA4F0D;
        --font-nomal-color:#313131;
        --font-gray-color:#696969;
        --font-white-color:#fff;
        --font-placeholder-color:#DBDBDB;
        --font-message-color:#EB5757 ;
        font-family:"Abril Fatface","BrugtyDemoRegular","Calfinedemo","Pretendard-Regular",sans-serif;
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
        color:var(--font-nomal-color);
        font-family: 'Pretendard-Regular', sans-serif;
    }
    p, span{
        text-decoration: none;
        color:var(--font-nomal-color);
        font-family: 'Pretendard-Regular', sans-serif;
        margin: 0;
        padding: 0;
    }
    button{
        border:none;
        background-color:inherit;
        padding:0;
        font-family: 'Pretendard-Regular', sans-serif;
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
        font-family: 'Pretendard-Regular', sans-serif;
        
       
    }
`;

export default GlobalStyles;
