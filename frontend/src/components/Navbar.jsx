import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../style/Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className='container'>
        <button
          className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
          type="button"
          onClick={handleMenuToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact to="/" className="nav-link" activeClassName="active" onClick={handleMenuToggle}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/login" className="nav-link" activeClassName="active" onClick={handleMenuToggle}>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cart" className="nav-link" activeClassName="active" onClick={handleMenuToggle}>
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/order-history" className="nav-link" activeClassName="active" onClick={handleMenuToggle}>
                Order History
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-brand mx-auto" href="/">Home Cafe</div>
      </div>
    </nav>
  );
}

export default Navbar;
