import React from 'react';
import './header.css';

export class Header extends React.Component {
	render() {
		return(
			<header>
				
					<div className="header_container">
						 
						<ul>
							<li>
								<h1 banner="hours">Chapman's Gem & Mineral Shop</h1>
							</li>
							<li>
								<a target="_blank" href="https://www.facebook.com/pages/Chapmans-Gem-Mineral-Shop-Museum/127570647298100" className="fa fa-facebook"></a>
							</li>
							<li>
								<a target="_blank" href="#" className="fa fa-twitter"></a>
							</li>
							<li>
								<a target="_blank" href="https://www.instagram.com/explore/locations/260451233/" className="fa fa-instagram"></a>
							</li>
							<li>
								<a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g32404-d2161569-Reviews-Chapman_s_Gem_Mineral_Shop_Museum-Fortuna_Humboldt_County_California.html" className="fa fa-tripadvisor"></a>
							</li>
						</ul>
					</div>
					
				
			</header>
			);
	}
};


