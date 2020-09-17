import React from 'react';
import logo from '../../../assets/images/logo.svg';
import './style.scss';
import Search from '../search';

const Header = () => {
	return (
		<header>
			<nav className="nav">
				<div>
					<a href="/">
						<img src={logo} alt="logo" />
						<div>
							<span>Unsplash</span>
							<span>Photos for everyone</span>
						</div>
					</a>
					<Search />
				</div>
			</nav>
		</header>
	);
};

export default Header;
