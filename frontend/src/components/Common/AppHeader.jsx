import React from "react";
import { Button, Nav, Navbar, NavbarBrand, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { removeToken } from "../Authentication/AuthProvider/helpers";

const AppHeader = () => {
	const { user, setUser } = useAuthContext();
	const navigate = useNavigate();

	const handleLogout = () => {
		removeToken();
		setUser();
		navigate("/logout", { replace: true });
	};

	return (
		<Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
			<Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
			<Navbar.Collapse id="navbarScroll">
				<Nav>
					<NavLink eventKey="5" as={Link} to="/order-history">Order History</NavLink>
					<NavLink eventKey="6" as={Link} to="/cart">Cart</NavLink>
					<NavLink eventKey="7" as={Link} to="/menu">Menu</NavLink>
				</Nav>
			</Navbar.Collapse>
			<NavbarBrand as={Link} to="/">HomeCafe</NavbarBrand>
				<>
					{user ? (
							<>
								<Button 
									className="auth_button_login" 
									href="/profile" 
									type="link"
								>
									{user.username}
								</Button>
								<Button 
									className="auth_button_logout" 
									type="primary"
									onClick={handleLogout}
								>
									Logout
								</Button>
							</>
					) : (
						<>
							<Button 
								className="auth_button_login"
								href="/login" 
								type="link"
							>
								Login
							</Button>
						</>
					)}
				</>
		</Navbar>
	);
};

export default AppHeader;