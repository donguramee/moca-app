import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

import Login from "../../components/login/Login";
import SignUp from "../../components/signup/SignUp";
import {
  LoginPageWrapper,
  LoginImgWrap,
  IntroTxt,
  IntroImg,
} from "./LoginPage.style";
import welcome from "../../assets/images/welcome.jpg";
import hello from "../../assets/images/hello.jpg";

const LoginPage = () => {
  // 이동 거리 (translateX)을 관리하기 위한 useState
  const [translateX, setTranslateX] = useState(100);

  // LoginImgWrap을 오른쪽으로 이동시키는 함수
  const moveImgWrapRight = () => {
    setTranslateX(0);
  };

  // LoginImgWrap을 왼쪽으로 이동시키는 함수
  const moveImgWrapLeft = () => {
    setTranslateX(100);
  };
  const imgWrapStyle = {
    transform: `translateX(${translateX}%)`,
    transition: "transform .7s ease-in-out",
  };

  return (
    <>
      <Helmet>
        <title>Moca | 로그인</title>
      </Helmet>
      <LoginImgWrap style={imgWrapStyle}>
        {/* translateX에 따라 조건부 렌더링 */}
        {translateX === 0 ? (
          <>
            <IntroTxt>
              Hello Friends
              <br /> Mo.ca
            </IntroTxt>
            <IntroImg src={welcome} />
          </>
        ) : (
          <>
            <IntroTxt>
              Welcome Back
              <br />
              Mo.ca
            </IntroTxt>
            <IntroImg src={hello} />
          </>
        )}
      </LoginImgWrap>
      <LoginPageWrapper>
        <Login moveImgWrapRight={moveImgWrapRight} />
        <SignUp
          moveImgWrapLeft={moveImgWrapLeft}
          moveImgWrapRight={moveImgWrapRight}
        />
      </LoginPageWrapper>
    </>
  );
};

export default LoginPage;
