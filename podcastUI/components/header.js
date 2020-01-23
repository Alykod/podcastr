import React from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarDivider, NavbarItem, Icon } from "bloomer";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <Navbar>
  <NavbarItem>
  {/* <p>Logo</p> */}
    <img src={require("../static/logo2.svg")} style={{width: '200px' ,height: '200px'}}/>
  </NavbarItem>
    <NavbarItem>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link href="/latest">
        <a style={linkStyle}>Latest</a>
      </Link>
    </NavbarItem>
  </Navbar>
);

export default Header;
