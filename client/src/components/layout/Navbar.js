import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<div className="container">
            <Link to="/">
			<div className="hero"></div>
            </Link>
			<div className="container mt-3">
				<ul className="nav separator justify-content-center">
					<li className="nav-item">
						<Link to="/about" className="nav-link">
							About
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link" to="/blog">
							Blog
						</Link>
					</li>
				</ul>
			</div>
			<div className="page-divider"></div>
		</div>
	);
};
