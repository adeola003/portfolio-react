import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => (
    <nav className="navbar">
      <div className="logo-title">
        <NavLink exact to="/">
         <img className="logo" src={logo} alt="personnal logo" />
        </NavLink>
      </div>
      <ul className="link_list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
);

export default Navbar;
