import React from "react";
import { NavWrapper, NavIcon, NavLists, NavList } from "./Nav.style";
import icon from "../../assets/images/icon.svg";
import bar from "../../assets/images/bar.svg";
import search from "../../assets/images/search.svg";
import star from "../../assets/images/star.svg";

const Nav = () => {
  return (
    <NavWrapper>
      <NavLists>
        <NavList style={{ marginBottom: "100px" }}>
          <NavIcon src={icon} />
          <p>Home</p>
        </NavList>
        <NavList>
          <NavIcon src={search} />
          <p>Search</p>
        </NavList>
        <NavList>
          <NavIcon src={star} />
          <p>Library</p>
        </NavList>
        <NavList style={{ marginTop: "330px" }}>
          <NavIcon src={bar} />
          <p>More...</p>
        </NavList>
      </NavLists>
    </NavWrapper>
  );
};

export default Nav;
