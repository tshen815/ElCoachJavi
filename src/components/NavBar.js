import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import {FaBars, FaTimes} from "react-icons/fa";
import "../styles/navBar.css";


const Navbar = () => {
	const [click, setClick] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	return (
		<>
 			<div className={scrolled ? "navbar active" : "navbar"}>
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo">
						<GiBoxingGloveSurprise className="navbar-icon"/> 
						El Coach Javi
					</Link>
					<div className="menu-icon">
						{click ? <FaTimes/> : <FaBars/>}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						
					</ul>
				</div>
			</div>
		</>
	)
}

export default Navbar;