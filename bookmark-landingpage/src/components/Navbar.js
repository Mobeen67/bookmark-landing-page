import React from 'react';
import styled, {css} from 'styled-components/macro'
import { Link } from 'react-router-dom';
import logo from '../images/logo-bookmark.svg';
import { menuData } from '../data/MenuData';
import { Button } from "./Button";
import Bars from '../images/icon-hamburger.svg'

const Logo = styled.div `
  margin-top: 0.5rem;
`
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 7rem;
  z-index: 100;
  position: fixed;
  width: 80%;
  background-color:#fff;
  @media screen and (max-width: 768px) {
     padding: 2rem 1.5rem;
   }
`;
const NavLinks = css `
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  cursor: pointer;
  text-decoration:none;
`;
const MenuBars = styled(Link) `
  display: none;
  @media screen and (max-width: 768px) {
     display:block;
     background: url(${Bars}) no-repeat;
     background-size: contain;
     height:15px;
     width:18px;
     position: relative;
     top: 0;
     left: 0;
     transform: translate(-50%, 85%);
   }
`;
const NavMenu = styled.div`
${NavLinks}
`;
const NavMenuLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration:none;
  @media screen and (max-width: 768px) {
     display:none;
   }
`;
const NavBtn = styled.div`
   display: flex;
   align-items: center;
   @media screen and (max-width: 768px) {
     display:none;
   }
`;

const Navbar = () => {
    return (
        <Nav>
        <Logo>
          <img src={logo} alt="bookmark logo"></img>
        </Logo>
          <NavMenu>
             {menuData.map((item, index) => (
               <NavMenuLinks to={item.link} key={index}>
                  {item.title}
               </NavMenuLinks>
             ))}
          <NavBtn>
            <Button to="/Login">
              Login
            </Button>
          </NavBtn>
          </NavMenu>
        <MenuBars>
        </MenuBars>
        </Nav>
    )
}

export default Navbar;
