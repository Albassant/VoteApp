import React, { PropTypes } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Auth from '../modules/Auth';

const Base = () => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <Link to="/">VoteApp</Link>
      </div>

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <NavLink activeClassName="active" to="/login">Log in</NavLink>
          <NavLink activeClassName="active" to="/register">Register</NavLink>
        </div>
      )}
    </div>
  </div>
);

export default Base;