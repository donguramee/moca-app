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
  SingnInTxt,
  LoginInputWrapper,
} from "../login/Login.style";
import welcome from "../../assets/images/welcome.jpg";

const Signin = () => {
  return (
    <WrapperLoginEmail>
      <LoginWrap>
        <Title>Sign.in</Title>
        <LoginInputWrapper>
          <LabelStyle htmlFor="user-email">E-Mail</LabelStyle>
          <InputStyle
            id="user-email"
            type="email"
            placeholder="사용하실 E-mail을 입력해주세요."
            required
          />

          <Incorrect>* 잘못된 이메일 형식입니다.</Incorrect>

          <LabelStyle htmlFor="user-pw">Password</LabelStyle>
          <InputStyle
            id="user-pw"
            type="password"
            placeholder="사용하실 Password을 입력해주세요."
            required
          />
          <Incorrect>* 비밀번호는 6글자 이상으로 설정해주세요.</Incorrect>

          <LabelStyle htmlFor="user-pw-check">Password 확인</LabelStyle>

          <InputStyle
            id="user-pw-check"
            type="password"
            placeholder="다시 한번 Password을 입력해주세요."
            required
          />
          <Incorrect>* 입력하신 비밀번호가 일치하지 않습니다.</Incorrect>
        </LoginInputWrapper>

        <LoginButtonWrapper>
          <Submitbutton style={{ marginTop: "20px" }}>Sign In</Submitbutton>
        </LoginButtonWrapper>
        <SingnInTxt>다시 로그인페이지로 돌아갈까요?</SingnInTxt>
      </LoginWrap>
      <LoginImgWrap>
        <IntroTxt>
          Welcome Friends
          <br /> Mo.ca
        </IntroTxt>
        <IntroImg src={welcome} />
      </LoginImgWrap>
    </WrapperLoginEmail>
  );
};

export default Signin;
