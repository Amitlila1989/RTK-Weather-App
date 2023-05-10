import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Favorites from "./pages/Favorites.page";

const TopBar = () => {
  return (
      <Header>
        <SLink to='/'>
        <Logo src="sun logo.jpg" alt="sun-logo" />
        </SLink>
        <Weather>Weather App</Weather>
        <Nav>
        <SLink to='/'>Home</SLink>
        <SLink to='/Favorites'>Favorites</SLink>
        </Nav>
    </Header>
  );
};
export default TopBar;

const Header = styled.header`
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: white;
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // display: block;
`;
const SLink = styled(Link)`
// border: 2px solid deeppink;
  color: blue;
  font-size: 20px;
  text-decoration: none;
  margin-right: 10px;
  :hover {
    text-decoration: underline;
  }
`;
const Weather = styled.div`
// border: 2px deeppink solid;
color: blue;
font-size: 20px;
// flex: 1;
:hover {
    cursor: pointer;
    text-decoration: underline;
}
`;
const Nav = styled.nav`
display: flex;
justify-content: flex-end;
// padding: 2px;
`;

const Logo = styled.img`
  width: 4rem;
`;

