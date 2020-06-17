import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import profileImage from '../../../images/reactMovie_logo.png';
const Header = () => (
  <div className="rmdb-header">
    <div className="rmdb-header-content">
      <Link to="/">
        <img className="rmdb-logo" src={ profileImage } alt="rmdb-logo" />
      </Link>
      <img className="rmdb-tmdb-logo" src="/images/tmdb_logo.png" alt="tmdb-logo" />
    </div>
  </div>
)

export default Header;