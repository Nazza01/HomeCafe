import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';
import "../style/Navbar.css";

function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleAuthClick = () => {
	 setIsLoggedIn(!isLoggedIn);
	};
	
	const handleMenuToggle = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark ms-auto">
			<div className="navbar-brand" href="/">Home Cafe</div>
			<button
				className={`navbar-toggler ${isMenuOpen ? 'collapsed' : ''}`}
				type="button"
				onClick={handleMenuToggle}
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<button 
				type="button" 
				className="btn btn-dark" 
				onClick={() => handleAuthClick()}
			>
				{isLoggedIn ? <Login /> : <Logout />}
			</button>
			<div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id='navbarNav'>
				<ul className="navbar-nav">
					<li className="nav-item active">
						<NavLink end to="/" className="nav-link active" onClick={handleMenuToggle}>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/login" className="nav-link active" onClick={handleMenuToggle}>
							Login
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/cart" className="nav-link active" onClick={handleMenuToggle}>
							Cart
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/order-history" className="nav-link active" onClick={handleMenuToggle}>
							Order History
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
