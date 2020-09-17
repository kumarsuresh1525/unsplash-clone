import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './style.scss';
import Search from '../search';

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <div>
          <a>
            <img src={logo}/>
            <div>
              <span>Unsplash</span>
              <span>Photos for everyone</span>
            </div>
          </a>
          <Search />
        </div>
        <div>
          <ul>
            <li>
              <a>Topics</a>
            </li>
            <li>
              <a>Explore</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;