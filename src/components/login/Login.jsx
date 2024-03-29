import React, { useState, useEffect } from "react";
import {
  InputStyle,
  LabelStyle,
  Title,
  Submitbutton,
  Incorrect,
} from "../form/Form.style";
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
} from "./Login.style";
import hello from "../../assets/images/hello.jpg";

const Login = () => {
  //로그인버튼 비활성화
  const [disabled, setDisabled] = useState(true);
  //인풋창 상태
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  //이메일 유효성
  const [emailValid, setEmailValid] = useState(false);
  const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/;

  //에러메세지
  const [emailErrorMessage, setEmailErrorMessage] = useState(false);
  const [loginErorrMessage, setLoginErorrMessage] = useState(false);
  //입력지연시 타이머
  const [typingTimer, setTypingTimer] = useState(null);
  //체험계정
  const [testAccount, setTestAccount] = useState(false);

  useEffect(() => {
    setDisabled(!(emailValid && pw.length >= 6) && !testAccount); //이메일과 패스워드가 작성되거나 체크박스가 체크(인풋창 비활성화)되면 로그인 버튼 활성화
  }, [emailValid, pw, testAccount]);

  const validation = (e) => {
    const emailValue = e.target.value;
    const pwValue = e.target.value;
    if (typingTimer) {
      clearTimeout(typingTimer); // 타이핑 중인 타이머가 있으면 클리어
    }
    if (e.target.id === "user-email") {
      setEmail(emailValue);
      setEmailValid(emailPattern.test(emailValue));

      if (!emailValue) {
        setEmailErrorMessage(false);
      } else if (!emailPattern.test(emailValue)) {
        const timer = setTimeout(() => {
          setEmailErrorMessage(true);
        }, 300);
        setTypingTimer(timer);
      } else {
        setEmailErrorMessage(false);
      }
    }
    if (e.target.id === "user-pw") {
      setPw(pwValue);
    }
  };

  const handleCheckboxClick = () => {
    if (!testAccount) {
      setEmail("moducafe@moca.com");
      setPw("123123");
      setEmailErrorMessage(false);
    } else {
      setEmail("");
      setPw("");
    }
    setTestAccount(!testAccount); // 체크 상태 업데이트
  };
  return (
    <>
      <WrapperLoginEmail>
        <LoginImgWrap>
          <IntroTxt>
            Welcome Back <br />
            Mo.ca
          </IntroTxt>
          <IntroImg src={hello} />
        </LoginImgWrap>

        <LoginWrap>
          <Title>Log.in</Title>
          <LoginInputWrapper>
            <LabelStyle htmlFor="user-email">E-Mail</LabelStyle>
            <InputStyle
              id="user-email"
              type="email"
              placeholder="E-mail을 입력해주세요."
              value={email}
              onChange={validation}
              disabled={testAccount}
              required
            />
            {emailErrorMessage && (
              <Incorrect>* 잘못된 이메일 형식입니다.</Incorrect>
            )}

            <LabelStyle htmlFor="user-pw">Password</LabelStyle>
            <InputStyle
              id="user-pw"
              type="password"
              placeholder="Password을 입력해주세요."
              value={pw}
              onChange={validation}
              disabled={testAccount}
              required
            />
            {loginErorrMessage && (
              <Incorrect>* 이메일 혹은 비밀번호가 일치하지 않습니다.</Incorrect>
            )}

            <LabelStyle>
              <InputStyle
                type="checkbox"
                checked={testAccount}
                onClick={handleCheckboxClick}
              />
              모카 체험해보기
            </LabelStyle>
          </LoginInputWrapper>

          <LoginButtonWrapper>
            <Submitbutton disabled={disabled}>Log In</Submitbutton>
          </LoginButtonWrapper>
          <ButtonWrap>
            <SocialLoginButton bordercolor={"#F2C94C"} socialimage={"kakao"}>
              카카오톡 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton bordercolor={"#767676"} socialimage={"google"}>
              구글 계정으로 로그인
            </SocialLoginButton>
          </ButtonWrap>
          <SingnInTxt>모카가 처음이신가요? 가입하기</SingnInTxt>
        </LoginWrap>
      </WrapperLoginEmail>
    </>
  );
};

export default Login;
