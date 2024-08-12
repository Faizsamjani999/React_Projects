import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg"
          alt="Logo"
        />
      </div>
      <nav className="nav-links">
        <ul>
          <li>Home</li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
          <li>Beauty</li>
          <li>Studio</li>
        </ul>
      </nav>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}

export default Header;
