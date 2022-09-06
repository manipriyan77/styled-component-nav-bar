import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  LeftContainer,
  RightContainer,
  NavbarLinkContainer,
  NavbarLink,
  LogoImg,
  OpenButon,
  NavbarLinkExtended,
} from "../Styles/Navbar.style";
import logo from "../assets/Image/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  const backgroundHideHandler = () => {
    setIsTrue((prevState) => !prevState);
  };

  return (
    <NavbarContainer isTrue={isTrue}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenButon onClick={backgroundHideHandler}>
              {isTrue ? <>&#10005;</> : <>&#8801;</>}
            </OpenButon>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <Link to="/">
            <LogoImg src={logo} />
          </Link>
        </RightContainer>
      </NavbarInnerContainer>
      {isTrue && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={backgroundHideHandler}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/products" onClick={backgroundHideHandler}>
            Products
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/about" onClick={backgroundHideHandler}>
            About
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/contact" onClick={backgroundHideHandler}>
            Contact
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
