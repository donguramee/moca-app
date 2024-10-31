import React, { useState } from "react";
import search from "../../assets/images/search.svg";
import { SearchButton, SearchInput, SearchInputWrapper } from "./Search.style";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    onSearch(inputValue); // 입력 값 전달
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch(); // 엔터 키로 검색 실행
    }
  };

  return (
    <SearchInputWrapper>
      <SearchInput
        type="text"
        value={inputValue}
        placeholder="찾고싶은 카페를 검색해주세요."
        onChange={handleInputChange}
        onKeyPress={handleKeyPress} // 엔터 키 검색 추가
      />
      <SearchButton
        type="button"
        onClick={handleSearch}
        src={search}
      ></SearchButton>
    </SearchInputWrapper>
  );
};

export default Search;
