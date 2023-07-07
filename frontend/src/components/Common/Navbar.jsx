import React from 'react';

import { Button, Space } from 'antd';
import { CgWebsite } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import { removeToken } from '../../helpers';

const Navbar = () => {
	const { user } = useAuthContext();
	const navigate = useNavigate();
	
	const handleLogout = () => {
		removeToken();
		navigate("/signin", { replace: true });
	};	

	return (
		<Space className='header_space'>
			<Button className='header_space_brand' href='/' type="link">
				<CgWebsite size={64} />
			</Button>
			<Space className='auth_buttons'>
				{user ? (
					<div>
						<Button className='auth_button_login' href="/profile" type="link">
							{user.username}
						</Button>
						<Button
							className='auth_button_signup'
							type="primary"
							onClick={handleLogout}
						>
							Logout
						</Button>
					</div>
				) : (
					<div>
						<div className='auth_button_login' href="/" type="link">
							{user.username}
						</div>
						<Button className='auth_button_login' href="/signin" type="link">
							Login
						</Button>
					</div>
				)
				}
			</Space>
		</Space>
	);
}

export default Navbar;
