import React from "react";
import search from "../../assets/images/search.svg";

import { SearchButton, SearchInput, SearchInputWrapper } from "./Search.style";

const Search = () => {
  return (
    <SearchInputWrapper htmlFor="search">
      <SearchInput
        id="search"
        type="text"
        placeholder="찾고싶은 카페를 검색해주세요."
      />
      <SearchButton id="search" type="submit" src={search}></SearchButton>
    </SearchInputWrapper>
  );
};

export default Search;
