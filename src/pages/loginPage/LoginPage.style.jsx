import styled from "styled-components";

export const LoginPageWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 70rem;
  height: 35rem;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const LoginImgWrap = styled.section`
  background-color: var(--primary-color);
  width: 35rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 100;
  border-radius: 10px;
`;
export const IntroTxt = styled.p`
  font-family: "Calfinedemo";
  font-weight: 400;
  font-size: 70px;
  color: var(--font-primary-color);
  text-align: center;
  margin-bottom: 30px;
`;
export const IntroImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 300px;
  height: auto;
  box-sizing: border-box;
`;
