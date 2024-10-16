import React, { useState } from "react";
import search from "../../assets/images/search.svg";

import { SearchButton, SearchInput, SearchInputWrapper } from "./Search.style";

const Search = ({ setSearchValue }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchValue(inputValue); // 입력된 값을 MainPage의 상태로 설정
  };
  return (
    <SearchInputWrapper onSubmit={handleSubmit}>
      <SearchInput
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // 입력값 변경 처리
        placeholder="찾고싶은 카페를 검색해주세요."
      />
      <SearchButton type="submit" src={search}></SearchButton>
    </SearchInputWrapper>
  );
};

export default Search;
