import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <li><NavLink to="/" activeClassName="is-active" exact>Go Home</NavLink></li>
    <li><NavLink to="/create" activeClassName="is-active" exact>Create Expense</NavLink></li>
  </header>
);

export default Header;
