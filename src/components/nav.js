import React from 'react';
import './nav.css';

export class Nav extends React.Component {
	render() {
		return(
			<nav>
				<ul>

					<li>
						<a className="About" href="#">
							About
						</a>
					</li>
					<li>
						<a className="Gallery" href="#">
							Gallery
						</a>
					</li>
					<li>
						<a className="Museum" href="#">
							Museum
						</a>
					</li>
					<li>
						<a className="Contact" href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
			);
	}
};