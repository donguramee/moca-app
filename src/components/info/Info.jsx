import React from "react";
import CafeListItem from "../cafeList/CafeListItem";
import Search from "../search/Search";
import { InfoWrapper, CafeListWrapper, ListTitle } from "./Info.style";

const Info = ({ searchResults, onSearch }) => {
  return (
    <>
      <InfoWrapper>
        <Search onSearch={onSearch} />
        <ListTitle>주변의 카페</ListTitle>
        <CafeListWrapper>
          {searchResults.map((place, index) => (
            <CafeListItem key={index} place={place} />
          ))}
        </CafeListWrapper>
      </InfoWrapper>
    </>
  );
};

export default Info;
