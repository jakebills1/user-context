import React from 'react';
import { Menu, } from 'semantic-ui-react';
import { NavLink, } from 'react-router-dom';
const Navbar = () => (
  <Menu>
    <NavLink to="/" >
      <Menu.Item>Home</Menu.Item>
    </NavLink>
    <NavLink to="/userprofile" >
      <Menu.Item>Your Profile</Menu.Item>
    </NavLink>
    <NavLink to="/hobbies">
      <Menu.Item>Your Hobbies</Menu.Item>
    </NavLink>

  </Menu>
)
export default Navbar;