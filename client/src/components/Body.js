import React from "react";
import { Link } from "react-router-dom";

export const Body = () => {
	return (
		<div className="row">
			<div className=" col-md-10 offset-md-1 landing-link">
				<div className="container text-center">
					<h1 className="welcome">Welcome</h1>
				</div>
			</div>
			<div className="row mt-5">
				<div className="col-md-9 offset-md-1 text-center welcome-message">
					<h6 className="text-start ">Hi! We are the Wirth Family!</h6>
					<p className="text-start mt-3">For half a decade we have been learning and growing in the art of modern homesteading! We strive to bring you along in our journey of gardening, parenting, natural living, and of course suburban homesteading! We live our life for the glory of God and for the health of our family. Our heart’s desire is to bring you authentic content, including hard-learned lessons and hearty, belly laughs; and we choose to take the good ‘ole front porch approach to do so! So come on in, kick off your shoes, and stay awhile—the coffee’s always on! </p>
					<Link to="/blog" >
						<div className="button btn btn-blog">Check out our blog!</div>
					</Link>
				</div>
			</div>
			<div className="row mt-5 welcome-message">
				<div className="col-md-6 offset-md-1">
					<h2 className="glad">We are so glad you're here!</h2>
				</div>
			</div>
		</div>
	);
};
