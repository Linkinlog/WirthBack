import React from "react";

export const Footy = () => {
	return (
		<div className="row">
			<div className="col-md-10 offset-md-1 border-top border-bottom">
				<p className="border-start text-muted border-2 border-danger mt-5 ps-2">
					“The true way to live is to enjoy every moment as it passes, and surely it is in the everyday things around us that the beauty of life lies.”
					<br /> -Laura Ingalls Wilder
				</p>
				<div className="col-md-3 offset-md-11">
					<button className="btn">
						<i className="fab fa-instagram"></i>
					</button>
					<button className="btn">
						<i className="fab fa-facebook"></i>
					</button>
					<button className="btn">
						<i className="fas fa-envelope-open-text"></i>
					</button>
				</div>
			</div>
			<div>
				<p className="text-muted ps-2 mt-5 mb-0 pb-2">Powered by Coffee</p>
			</div>
		</div>
	);
};
