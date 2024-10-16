import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Info from "../../components/info/Info";
import Map from "../../components/map/Map";
import Nav from "../../components/nav/Nav";

import { MainWrapper } from "./MainPage.style";

const MainPage = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Helmet>
        <title>Moca | 메인</title>
      </Helmet>
      <MainWrapper>
        <Nav />
        <Info onSearch={setSearchValue} />
        <Map searchValue={searchValue} />
      </MainWrapper>
    </>
  );
};

export default MainPage;
