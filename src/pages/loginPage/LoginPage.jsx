import React from "react";
import { Helmet } from "react-helmet-async";
import {
  InputStyle,
  LabelStyle,
  Title,
} from "../../components/form/Form.style";
import {
  WrapperLoginEmail,
  LoginWrap,
  LoginImgWrap,
  IntroTxt,
} from "./LoginPage.style";

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Moca | 로그인</title>
      </Helmet>
      <WrapperLoginEmail>
        <LoginImgWrap>
          <IntroTxt>Welcome :)</IntroTxt>
        </LoginImgWrap>

        <LoginWrap>
          <Title>Login</Title>
          <LabelStyle htmlFor="user-email">E-Mail</LabelStyle>
          <InputStyle type="email" placeholder="E-mail" />
          <InputStyle type="password" placeholder="Password" />
        </LoginWrap>
      </WrapperLoginEmail>
    </>
  );
};

export default LoginPage;
