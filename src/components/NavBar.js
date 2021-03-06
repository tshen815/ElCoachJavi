import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiBoxingGloveSurprise } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./Button";
import "../styles/navBar.css";


const NavBar = () => {
	const [click, setClick] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [button, setButton] = useState(true);

	const toggleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	const showButton = () => {
		if (window.innerWidth <= 1050) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	const changeNavbar = () => {
		if (window.scrollY >= 20) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	window.addEventListener("scroll", changeNavbar);


	return (
		<>
			<div className={scrolled ? "navbar active" : "navbar"}>
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
						<GiBoxingGloveSurprise className="navbar-icon" />
						El Coach Javi
					</Link>
					<div className="menu-icon" onClick={toggleClick}>
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={toggleClick}>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={toggleClick}>
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={toggleClick}>
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={toggleClick}>
								Gym
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links" onClick={toggleClick}>
								FAQ
							</Link>
						</li>
						<li className="nav-btn">
							{button ? (
								<Link to="/contact" className="btn-link">
									<Button buttonStyle="btn--outline">Contact</Button>
								</Link>
							) : (
								<Link to="/" className="btn-link">
									<Button buttonStyle="btn--outline" buttonSize="btn--mobile" onClick={toggleClick}> Contact</Button>
								</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</>
	)
}

export default NavBar;