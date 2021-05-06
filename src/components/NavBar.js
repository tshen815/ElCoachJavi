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

	return (
		<>
			<div className={scrolled ? "navbar active" : "navbar"}>
				<div className="navbar-container container">
					<Link to="/" className="navbar-logo">
						<GiBoxingGloveSurprise className="navbar-icon" />
						El Coach Javi
					</Link>
					<div className="menu-icon">
						{click ? <FaTimes /> : <FaBars />}
					</div>
					<ul className={click ? "nav-menu active" : "nav-menu"}>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								About
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Services
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
								Gym
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/" className="nav-links">
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
									<Button buttonStyle="btn--outline" buttonSize="btn--mobile"> Contact</Button>
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