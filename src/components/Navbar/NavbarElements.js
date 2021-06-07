
import {IoSettingsOutline } from 'react-icons/io5';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  align-items:center;
  background:#211f1f ;
  height: 65px;
  display: flex;
  justify-content: space-between;
`;
export const H1 = styled.h1`
  color:#fffafa;
`
export const H2 = styled.h2`
  color:#fffafa;
  margin-left:10px
`

export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Profile_box = styled.div`
  height: 40px;
  width: 40px;
  background-color: #bbb;
  border-radius: 100%;
  display: inline-block;
`;

export const Title = styled.div`
  display:flex;
  flex-direction:row;
  float:left;
`; 

export const List = styled.div`
  right:0;
  display:flex;
  flex-direction:row;
  text-align:center;
`; 
export const SettingIcon = styled(IoSettingsOutline)`
  margin-top:5px;
  font-size: 2.00em;
`

