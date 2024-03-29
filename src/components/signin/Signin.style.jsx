import styled from "styled-components";
import socialImage from "../../assets/images/social_login_sprites.png";

export const WrapperLoginEmail = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  width: 70rem;
  height: 35rem;
  border-radius: 10px;
  overflow: hidden;
`;
export const LoginImgWrap = styled.section`
  background-color: var(--primary-color);
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

export const LoginWrap = styled.section`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginButtonWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const ButtonWrap = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 0.4px solid;
  border-color: var(--font-placeholder-color);
`;
export const LoginInputWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const SingnInTxt = styled.p`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2px;
  font-size: 12px;
  cursor: pointer;
  color: var(--font-gray-color);
`;
export const SocialLoginButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px;
  color: var(--font-gray-color);
  font-size: 14px;
  background-color: #fff;
  text-align: center;
  border-radius: 44px;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.bordercolor};
  &::before {
    content: "";
    display: block;
    height: 24px;
    width: 24px;
    margin: 10px;
    position: absolute;
    top: 30%;
    left: 3%;
    transform: translateY(-50%);
    background: url(${socialImage})
      ${({ socialimage }) =>
        socialimage === "kakao"
          ? `-48px -10px;`
          : socialimage === "google"
          ? `-10px -10px`
          : `-86px -10px`};
  }
  &:hover {
    background-color: ${(props) =>
      props.socialimage === "kakao"
        ? "#f3dfa3"
        : props.socialimage === "google"
        ? "#cac8c8"
        : "#69b2dd"};
    border-color: transparent;
    color: #fff;
  }
`;
