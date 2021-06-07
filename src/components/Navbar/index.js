import React from 'react';
import {IoSettingsOutline } from 'react-icons/io5';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  H1,
  H2,
  Profile_box,
  Title,
  List,
  SettingIcon,
} from './NavbarElements';
import {
  BrowserRouter as Router}
  from 'react-router-dom';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Router>
          <Title>
          <H1>
            Beyond  
          </H1>
          <H2>
            Flow 
          </H2>
          </Title>
          <List>
          <NavLink to='/setting' activeStyle>
            <SettingIcon/>
          </NavLink>
          <NavLink to='/profile' activeStyle>
          <Profile_box>
          </Profile_box>
          </NavLink>
          </List>
        </Router>
        </Nav>
    </>
  );
};
  
export default Navbar;