import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './assets/planet.png';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <div className="logo-title">
        <img className="logo" src={planet} alt="Planet logo" />
        <h1 className="title">Space traveler&apos;s Hub</h1>
      </div>
      <ul className="link_list">
        <li>
          <NavLink exact to="/" activeClassName="active">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/missions" activeClassName="active">
            Missions
          </NavLink>
        </li>
        <span>|</span>
        <li>
          <NavLink to="/profile" activeClassName="active">
            My profile
          </NavLink>
        </li>
      </ul>
    </nav>
    <hr className="bar" />
  </header>
);

export default Navbar;
