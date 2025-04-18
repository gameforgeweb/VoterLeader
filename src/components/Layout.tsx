import React from 'react';
import { Outlet } from 'react-router-dom';
import CityDropdown from './CityDropdown';
import Logo from './Logo';

const Layout = () => {
  return (
    <div className="main-container">
      {/* Navigation Bar */}
      <nav className="nav-bar">
        <Logo />
        <div className="nav-buttons">
          <button className="nav-button">Sign Up</button>
          <button className="nav-button">Login</button>
        </div>
      </nav>

      {/* City Selector */}
      <div className="city-selector">
        <h2>Select Your City</h2>
        <CityDropdown />
      </div>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout; 