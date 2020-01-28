import React, {useState, useEffect} from "react";
import Link from "next/link";
import { Navbar, NavbarBrand, NavbarDivider, NavbarItem, Icon } from "bloomer";

const linkStyle = {
  marginRight: 15
};


const Header = () => {

  const [iconUrl, setIconUrl] = useState(null)


  useEffect(()=> {
    if(!iconUrl) {
      if(process.browser) {
        setIconUrl(window.location.origin + "/static/icon.png")
      } 
    }
  }, [iconUrl])
   
  
  return (
  <Navbar>
  <NavbarItem>
  {/* <p>Logo</p> */}
   {iconUrl &&  <img src={iconUrl} style={{width: '200px' ,height: '200px', 'objectFit': 'scale-down'}}/> }
  </NavbarItem>
    <NavbarItem>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link href="/blog">
        <a style={linkStyle}>Blog</a>
      </Link>
    </NavbarItem>
    <NavbarItem>
      <Link href="/latest">
        <a style={linkStyle}>Latest</a>
      </Link>
    </NavbarItem>
  </Navbar>
  )
}


export default Header;
