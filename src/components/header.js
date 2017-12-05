import React from 'react';
import './header.css';

export class Header extends React.Component {
	render() {
		return(
			<header>
				
					<div class="header_container">
						 
						<ul>
							<li>
								<p class="hours">Open Sunday - Saturday 10AM to 5PM.</p>
							</li>
							<li>
								<a target="_blank" href="https://www.facebook.com/pages/Chapmans-Gem-Mineral-Shop-Museum/127570647298100" class="fa fa-facebook"></a>
							</li>
							<li>
								<a target="_blank" href="#" class="fa fa-twitter"></a>
							</li>
							<li>
								<a target="_blank" href="https://www.instagram.com/explore/locations/260451233/" class="fa fa-instagram"></a>
							</li>
							<li>
								<a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g32404-d2161569-Reviews-Chapman_s_Gem_Mineral_Shop_Museum-Fortuna_Humboldt_County_California.html" class="fa fa-tripadvisor"></a>
							</li>
						</ul>
					</div>
					
				
			</header>
			);
	}
};

