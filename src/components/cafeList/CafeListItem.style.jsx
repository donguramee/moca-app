import styled from "styled-components";

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 348px;
  height: 150px;
  border: 2px solid transparent; /* 기본 상태에서 투명한 border 추가 */
  border-radius: 15px;
  margin-top: 10px;
  cursor: pointer;
  /* gap: 20px; */

  &:hover {
    border: 2px solid var(--secondary-color);
    /* box-shadow: 0 0 10px var(--font-gray-color); */
  }
`;

export const ItemImage = styled.img`
  background-color: #eee;
  width: 150px;
  height: 120px;
  margin: 10px;
  border-radius: 15px;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 130px;
  position: relative;
`;
export const Cafename = styled.h3`
  font-family: "Pretendard-Bold";
  font-weight: 400;

  position: absolute;
  top: 10px;
`;
export const Cafeinfo = styled.p`
  position: absolute;
  top: 35px;
`;
export const CafeLikeWrapper = styled.div`
  position: absolute;
  right: 10px;
  bottom: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CafeLike = styled.img`
  width: 20px;
  height: 20px;
`;
export const LikeCount = styled.p`
  margin-left: 10px;
  font-size: 1rem;
`;
