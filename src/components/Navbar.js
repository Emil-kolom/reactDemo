import React from 'react';
import {Link} from "react-router-dom";
import '../style/navbar.css'

const Navbar = () => {
	return (
		<div className='navbar'>
			<h1>Home</h1>
			<nav>
				<Link to="/posts">Posts</Link> |{" "}
				<Link to="/about">About</Link>
			</nav>
		</div>
	);
};

export default Navbar;