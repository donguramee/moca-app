import React from "react";
import {
  ListItem,
  ItemImage,
  ItemInfo,
  Cafename,
  Cafeinfo,
  CafeLike,
  CafeLikeWrapper,
  LikeCount,
} from "./CafeListItem.style";

import heart from "../../assets/images/heart.svg";

const CafeListItem = () => {
  return (
    <ListItem>
      <ItemImage></ItemImage>
      <ItemInfo>
        <Cafename>동그라미 카페</Cafename>
        <Cafeinfo>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        </Cafeinfo>
        <CafeLikeWrapper>
          <CafeLike src={heart} />
          <LikeCount>3</LikeCount>
        </CafeLikeWrapper>
      </ItemInfo>
    </ListItem>
  );
};

export default CafeListItem;
