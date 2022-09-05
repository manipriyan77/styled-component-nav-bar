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

const Navbar = () => {
  const [isTrue, setIsTrue] = useState(false);

  return (
    <NavbarContainer isTrue={isTrue}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/products">Products</NavbarLink>
            <NavbarLink to="/about">About</NavbarLink>
            <NavbarLink to="/contact">Contact</NavbarLink>
            <OpenButon onClick={() => setIsTrue((prevState) => !prevState)}>
              {isTrue ? <>&#10005;</> : <>&#8801;</>}
            </OpenButon>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoImg src={logo} />
        </RightContainer>
      </NavbarInnerContainer>
      {isTrue && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">About</NavbarLinkExtended>
          <NavbarLinkExtended to="/contact">Contact</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
