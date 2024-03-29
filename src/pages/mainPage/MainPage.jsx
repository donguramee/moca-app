import React from "react";
import { Helmet } from "react-helmet-async";
import { InputStyle, LabelStyle } from "../../components/form/Form.style";
import Nav from "../../components/nav/Nav";

import {
  MainWrapper,
  InfoWrapper,
  MapWrapper,
  SearchInput,
} from "./MainPage.style";

const MainPage = () => {
  return (
    <>
      <Helmet>
        <title>Moca | 메인</title>
      </Helmet>
      <Nav />
      <MainWrapper>
        <InfoWrapper>
          <SearchInput>
            <InputStyle
              type="email"
              placeholder="E-mail을 입력해주세요."
            ></InputStyle>
          </SearchInput>
        </InfoWrapper>
        <MapWrapper></MapWrapper>
      </MainWrapper>
    </>
  );
};

export default MainPage;
