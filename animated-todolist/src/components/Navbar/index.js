import React from "react"
import ResponsiveMenu from "react-responsive-navbar"
import {
  Header,
  Logo,
  Menu,
  MenuMobileOpenBtn,
  MenuMobileCloseBtn
} from "../../styles/StyledNavbar"
import { Link } from "react-router-dom"
import menuIcon from "../../images/menuIcon.png"
import closeMenu from "../../images/closeMenu.png"

const Navbar = () => (
  <Header>
    <Logo>LOGO</Logo>
    <ResponsiveMenu
      menuOpenButton={
        <MenuMobileOpenBtn>
          <img src={menuIcon} alt="Open Mobile Menu" />
        </MenuMobileOpenBtn>
      }
      menuCloseButton={
        <MenuMobileCloseBtn>
          <img src={closeMenu} alt="Close Mobile Menu" />
        </MenuMobileCloseBtn>
      }
      changeMenuOn="475px"
      largeMenuClassName="large-menu"
      smallMenuClassName="mobile-menu"
      menu={
        <Menu>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/trash">
            <li>Trash</li>
          </Link>
        </Menu>
      }
    />
  </Header>
)

export default Navbar