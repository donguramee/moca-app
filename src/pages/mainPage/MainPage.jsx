import React from "react";
import { Helmet } from "react-helmet-async";
import Info from "../../components/info/Info";
import Map from "../../components/map/Map";
import Nav from "../../components/nav/Nav";

import { MainWrapper } from "./MainPage.style";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Moca | 메인</title>
      </Helmet>
      <MainWrapper>
        <Nav />
        <Info />
        <Map />
      </MainWrapper>
    </>
  );
};

export default MainPage;
