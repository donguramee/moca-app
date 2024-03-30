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
  LoginButtonWrapper,
  SingnInTxt,
  LoginInputWrapper,
} from "../login/Login.style";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp = ({ moveImgWrapLeft, moveImgWrapRight }) => {
  // 로그인 버튼 비활성화
  const [disabled, setDisabled] = useState(true);

  // 인풋 상태
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");

  // 유효성 검사 상태
  const [emailValid, setEmailValid] = useState(false);

  // 에러 메시지 상태
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(false);
  const [passwordCheckErrorMessage, setPasswordCheckErrorMessage] =
    useState(false);
  const [nickNameErrorMessage, setNickNameErrorMessage] = useState(false);

  // 입력 지연시 타이머
  const [typingTimer, setTypingTimer] = useState(null);

  // 이메일 패턴 정규식
  const emailPattern = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.(com|net)$/;

  // 이메일 유효성과 비밀번호 유효성을 기반으로 로그인 버튼 활성화 상태를 결정
  useEffect(() => {
    setDisabled(!(emailValid && pw.length >= 6 && pw === pwCheck && nickName));
  }, [emailValid, pw, pwCheck, nickName]);

  //이메일 유효성검사 및 입력창
  const validation = (e) => {
    const targetId = e.target.id;
    const value = e.target.value;
    if (typingTimer) {
      clearTimeout(typingTimer);
    }

    if (targetId === "user-nickname") {
      setNickName(value);
      if (value.length < 4) {
        setNickNameErrorMessage(true);
      } else {
        setNickNameErrorMessage(false);
      }
    } else if (targetId === "user-email") {
      setEmail(value);
      const isEmailValid = emailPattern.test(value);
      setEmailValid(isEmailValid);

      if (!value) {
        setEmailErrorMessage("");
      } else if (!isEmailValid) {
        const timer = setTimeout(() => {
          setEmailErrorMessage("* 이메일 형식에 맞지 않아요.");
        }, 300);
        setTypingTimer(timer);
      } else {
        setEmailErrorMessage("");
      }
    } else if (targetId === "user-pw") {
      setPw(value);
      if (value.length < 6) {
        setPasswordErrorMessage(true);
      } else {
        setPasswordErrorMessage(false);
      }
      if (value !== pwCheck) {
        setPasswordCheckErrorMessage(false);
      } else {
        setPasswordCheckErrorMessage(true);
      }
    } else if (targetId === "user-pw-check") {
      setPwCheck(value);
      if (value !== pw) {
        setPasswordCheckErrorMessage(true);
      } else {
        setPasswordCheckErrorMessage(false);
      }
    }
  };

  //초기화
  const resetInput = () => {
    setNickName("");
    setEmail("");
    setPw("");
    setPwCheck("");
    setEmailValid(false);
    setEmailErrorMessage("");
    setPasswordErrorMessage(false);
    setPasswordCheckErrorMessage(false);
    setNickNameErrorMessage(false);
  };

  //회원가입
  const createUser = async () => {
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, pw);
      moveImgWrapLeft();
      resetInput();
      alert("이제 모카를 시작해봐요 :)");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setEmailErrorMessage("* 이 이메일은 이미 사용 중입니다.");
        alert("이미 사용중인 이메일이에요.");
        setDisabled(true); // 에러 발생 시 버튼 비활성화
      }
    }
  };

  return (
    <WrapperLoginEmail>
      <LoginWrap>
        <Title>Sign.up</Title>
        <LoginInputWrapper>
          <LabelStyle htmlFor="user-nickname">닉네임</LabelStyle>
          <InputStyle
            id="user-nickname"
            type="text"
            placeholder="사용하실 닉네임을 입력해주세요."
            value={nickName}
            onChange={validation}
            required
          />
          {nickNameErrorMessage && (
            <Incorrect>* 닉네임은 네글자 이상으로 해주세요.</Incorrect>
          )}
          <LabelStyle htmlFor="user-email">E-Mail</LabelStyle>
          <InputStyle
            id="user-email"
            type="email"
            placeholder="사용하실 E-mail을 입력해주세요."
            value={email}
            onChange={validation}
            required
          />
          {emailErrorMessage && <Incorrect>{emailErrorMessage}</Incorrect>}

          <LabelStyle htmlFor="user-pw">Password</LabelStyle>
          <InputStyle
            id="user-pw"
            type="password"
            placeholder="사용하실 Password을 입력해주세요."
            value={pw}
            onChange={validation}
            required
          />
          {passwordErrorMessage && (
            <Incorrect>* 비밀번호는 6글자 이상으로 설정해주세요.</Incorrect>
          )}

          <LabelStyle htmlFor="user-pw-check">Password 확인</LabelStyle>
          <InputStyle
            id="user-pw-check"
            type="password"
            placeholder="다시 한번 Password을 입력해주세요."
            value={pwCheck}
            onChange={validation}
            required
          />
          {passwordCheckErrorMessage && (
            <Incorrect>* 입력하신 비밀번호가 일치하지 않습니다.</Incorrect>
          )}
        </LoginInputWrapper>

        <LoginButtonWrapper>
          <Submitbutton
            style={{ marginTop: "20px" }}
            disabled={disabled}
            onClick={createUser}
          >
            Sign Up
          </Submitbutton>
        </LoginButtonWrapper>
        <SingnInTxt
          onClick={() => {
            moveImgWrapLeft();
            resetInput();
          }}
          style={{ marginTop: "10px" }}
        >
          다시 로그인페이지로 돌아갈까요?
        </SingnInTxt>
      </LoginWrap>
    </WrapperLoginEmail>
  );
};

export default SignUp;
