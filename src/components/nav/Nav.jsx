import React from "react";
import { NavWrapper, NavIcon, NavLists, NavList } from "./Nav.style";
import icon from "../../assets/images/icon.svg";
import people from "../../assets/images/people.png";
import star from "../../assets/images/star.svg";
import map from "../../assets/images/map.svg";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLists>
        <NavList style={{ paddingBottom: "100px" }}>
          <NavIcon src={icon} />
          <p>Home</p>
        </NavList>
        <NavList>
          <NavIcon src={map} />
          <p>Navi</p>
        </NavList>
        <NavList>
          <NavIcon src={star} />
          <p>My List</p>
        </NavList>
        <NavList style={{ marginTop: "330px" }}>
          <NavIcon src={people} />
          <p>Log out</p>
        </NavList>
      </NavLists>
    </NavWrapper>
  );
};

export default Nav;
