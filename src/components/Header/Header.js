import React from 'react';
import { Link } from 'react-router-dom';
import user from "../../images/user.png"
import logo from "../../images/logo.png"
import "./Header.scss"
const Header = () => {
    return (
        <div className='header'>
            <Link to ="/">
            <div className="logo">
              <img src={logo} alt="logo" className='logo-img'/> 
              <h1>MovieFlix</h1>
            </div>
            </Link>
          <div className="user-image">
            <img src={user} alt="user" />
          </div>
        </div>
    );
};

export default Header;