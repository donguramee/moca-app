import styled from "styled-components";

export const InfoWrapper = styled.section`
  height: 100%;
  width: 390px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SearchInput = styled.div`
  width: 380px;
`;

export const CafeListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  max-height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ListTitle = styled.h1`
  display: flex;
  width: 90%;
  font-family: "Pretendard-Bold";
  color: var(--font-gray-color);
  font-size: 1.1rem;
`;
