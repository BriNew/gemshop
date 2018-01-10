import React from 'react';
import './header.css';


export class Header extends React.Component {
	render() {
		return(
			<header>
				<div className="header_container">
					<h1 className="banner_fullscreen">Chapman's Gem & Mineral Shop</h1>
					<h1 className="banner_mobile">Chapman's Gem Shop</h1>
				</div>	

			</header>
			);
	}
};