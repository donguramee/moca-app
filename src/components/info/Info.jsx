import React from "react";
import CafeListItem from "../cafeList/CafeListItem";
import Search from "../search/Search";
import { InfoWrapper, CafeListWrapper, ListTitle } from "./Info.style";

const Info = () => {
  return (
    <>
      <InfoWrapper>
        <Search />
        <ListTitle>주변의 카페</ListTitle>
        <CafeListWrapper>
          <CafeListItem />
          <CafeListItem />
          <CafeListItem />
          <CafeListItem />
          <CafeListItem />
          <CafeListItem />
        </CafeListWrapper>
      </InfoWrapper>
    </>
  );
};

export default Info;
