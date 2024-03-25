import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  InputStyle,
  LabelStyle,
  Title,
  Submitbutton,
} from "../../components/form/Form.style";
import {
  WrapperLoginEmail,
  LoginWrap,
  LoginImgWrap,
  IntroTxt,
  IntroImg,
  LoginButtonWrapper,
  ButtonWrap,
  SingnInTxt,
  LoginInputWrapper,
  SocialLoginButton,
} from "./LoginPage.style";
import hello from "../../assets/images/hello.jpg";

const LoginPage = () => {
  const [showNotAvailable, setShowNotAvailable] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [testAccount, setTestAccount] = useState(false);

  //체험하기
  // const handleCheckboxClick = () => {
  //   if (!testAccount) {
  //     setEmail("campick09@naver.com");
  //     setPw("123123");
  //     setValidEmail(false);
  //   } else {
  //     setEmail("");
  //     setPw("");
  //   }
  //   setTestAccount(!testAccount);
  // };

  const handleAlert = () => {
    setShowNotAvailable(true);
    setTimeout(() => setShowNotAvailable(false), 3000);
  };
  return (
    <>
      <Helmet>
        <title>Moca | 로그인</title>
      </Helmet>
      <WrapperLoginEmail>
        <LoginImgWrap>
          <IntroTxt>Welcome Moca</IntroTxt>
          <IntroImg src={hello} />
        </LoginImgWrap>

        <LoginWrap>
          <Title>Login</Title>
          <LoginInputWrapper>
            <LabelStyle htmlFor="user-email">E-Mail</LabelStyle>
            <InputStyle
              id="user-email"
              type="email"
              placeholder="E-mail을 입력해주세요."
            />
            <LabelStyle htmlFor="user-pw">Password</LabelStyle>
            <InputStyle
              id="user-pw"
              type="password"
              placeholder="Password을 입력해주세요."
            />
            <LabelStyle>
              <InputStyle
                type="checkbox"
                // checked={testAccount}
                // onClick={handleCheckboxClick}
              />
              모카 체험해보기
            </LabelStyle>
          </LoginInputWrapper>

          <LoginButtonWrapper>
            <Submitbutton>Log In</Submitbutton>
          </LoginButtonWrapper>
          <ButtonWrap>
            <SocialLoginButton
              bordercolor={"#F2C94C"}
              socialimage={"kakao"}
              onClick={handleAlert}
            >
              카카오톡 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#767676"}
              socialimage={"google"}
              onClick={handleAlert}
            >
              구글 계정으로 로그인
            </SocialLoginButton>
          </ButtonWrap>
          <SingnInTxt>모카가 처음이신가요? 가입하기</SingnInTxt>
        </LoginWrap>
      </WrapperLoginEmail>
    </>
  );
};

export default LoginPage;
