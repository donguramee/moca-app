import styled from "styled-components";

export const NavWrapper = styled.section`
  width: 70px;
  height: 100vh;
  background-color: var(--font-white-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow: hidden; // 확장되지 않은 부분에서 내용 숨김
  border-right: 0.5px solid var(--font-gray-color);

  &:hover {
    width: 160px; // 호버 시 너비 확장
  }
`;

export const NavLists = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
`;

export const NavList = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 180px;
  height: 80px;
  padding: 5px;
  margin: 20px 0;
  border-radius: 20px;
  color: var(--font-normal-color);
  font-size: 15px;
  cursor: pointer;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 40%;

    margin-left: 20px;
    margin-bottom: 15px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0s ease 0.3s;
  }

  ${NavWrapper}:hover & p {
    font-family: "Pretendard-Bold";
    color: var(--font-gray-color);
    opacity: 1;
    visibility: visible;
    transition: opacity 0.3s ease;
    &:hover {
      color: var(--secondary-color);
    }
  }
`;

export const NavIcon = styled.img`
  width: 25px;
  height: auto;
  margin-bottom: 15px;
  margin-left: 15px;
  transition: filter 0.3s ease;
`;
