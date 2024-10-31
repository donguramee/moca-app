import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Info from "../../components/info/Info";
import Map from "../../components/map/Map";
// import Mapwrap from "../../components/map/Mapwrap";
import Nav from "../../components/nav/Nav";

import { MainWrapper } from "./MainPage.style";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (inputValue) => {
    setSearchValue(inputValue);
  };

  return (
    <>
      <Helmet>
        <title>Moca | 메인</title>
      </Helmet>
      <MainWrapper>
        <Nav />
        <Info searchResults={searchResults} onSearch={handleSearch} />
        <Map searchValue={searchValue} setSearchResults={setSearchResults} />
        {/* <Mapwrap searchValue={searchValue} /> */}
      </MainWrapper>
    </>
  );
};

export default MainPage;
