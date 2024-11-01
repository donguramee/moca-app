import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  LoginButtonWrapper,
  ButtonWrap,
  SingnInTxt,
  LoginInputWrapper,
  SocialLoginButton,
} from "./Login.style";
import { auth } from "../../firebase/fbconfig";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
const Login = ({ moveImgWrapRight }) => {
  const navigate = useNavigate();
  //로그인버튼 비활성화
  const [disabled, setDisabled] = useState(true);
  //인풋창 상태
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  //이메일 유효성
  const [emailValid, setEmailValid] = useState(false);
  const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/;
  const [userData, setUserData] = useState(null);

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

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Firebase 인증을 사용한 로그인 시도
      await signInWithEmailAndPassword(auth, email, pw);
      // 로그인 성공: 메인 페이지로 이동
      navigate("/main");
    } catch (error) {
      // 로그인 실패: 에러 처리
      setLoginErorrMessage(true);
      console.error("로그인 실패:", error.message);
    }
  };

  //초기화
  const resetInput = () => {
    setEmail("");
    setPw("");
    setEmailErrorMessage(false);
    setLoginErorrMessage(false);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    try {
      const data = await signInWithPopup(auth, provider); // 팝업창 띄워서 로그인
      setUserData(data.user); // user data 설정
      // 로그인 성공: 메인 페이지로 이동
      navigate("/main");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGithubLogin = async () => {
    const provider = new GithubAuthProvider();
    try {
      const data = await signInWithPopup(auth, provider); // 팝업창 띄워서 로그인
      setUserData(data.user); // user data 설정
      // 로그인 성공: 메인 페이지로 이동
      navigate("/main");
      console.log("깃허브로그인 성공");
    } catch (err) {
      // console.log(err);
      console.log("깃허브로그인 실패");
    }
  };

  return (
    <>
      <WrapperLoginEmail>
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
            <Submitbutton disabled={disabled} onClick={handleLogin}>
              Log In
            </Submitbutton>
          </LoginButtonWrapper>
          <ButtonWrap>
            <SocialLoginButton
              bordercolor={"#767676"}
              socialimage={"github"}
              onClick={handleGithubLogin}
            >
              카카오톡 계정으로 로그인
            </SocialLoginButton>
            <SocialLoginButton
              bordercolor={"#767676"}
              socialimage={"google"}
              onClick={handleGoogleLogin}
            >
              구글 계정으로 로그인
            </SocialLoginButton>
          </ButtonWrap>
          <SingnInTxt
            onClick={() => {
              resetInput();
              moveImgWrapRight();
            }}
          >
            모카가 처음이신가요? 가입하기
          </SingnInTxt>
        </LoginWrap>
      </WrapperLoginEmail>
    </>
  );
};

export default Login;
