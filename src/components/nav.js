import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css';


export class Nav extends React.Component {
	render() {
		return(
			<div>
				<nav>
					<ul className="nav_ul">
						<li className="nav_li">
							<Link to='/authentication'>Sign In</Link>
						</li>	
						<li className="nav_li">
							<Link to='/rocks'>Inventory</Link>
						</li>					
						<li className="nav_li">
							<Link to='/contactmain'>Contact</Link>
						</li>
						<li className="nav_li">
							<Link to='/photos'>Gallery</Link>
						</li>
						<li className="nav_li">
							<Link to='/museum'>Museum</Link>
						</li>
						<li className="nav_li">
							<Link to='/about'>About</Link>
						</li>
						<li className="nav_li">
							<Link to='/'>Home</Link>
						</li>
						<li className="social_li social_li_fb">
							<a target="_blank" href="https://www.facebook.com/pages/Chapmans-Gem-Mineral-Shop-Museum/127570647298100" className="fa fa-facebook"></a>
						</li>
						<li className="social_li social_li_twitter">
							<a target="_blank" href="#" className="fa fa-twitter"></a>
						</li>
						<li className="social_li social_li_instagram">
							<a target="_blank" href="https://www.instagram.com/explore/locations/260451233/" className="fa fa-instagram"></a>
						</li>
						<li className="social_li social_li_tripadvisor">
							<a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g32404-d2161569-Reviews-Chapman_s_Gem_Mineral_Shop_Museum-Fortuna_Humboldt_County_California.html" className="fa fa-tripadvisor"></a>
						</li>
					</ul>
					<div id="hamburger">

					    <input type="checkbox" />
					       
					    <span></span>
					    <span></span>
					    <span></span>
					    
					    <ul id="hamburger_menu">
					      <a href="#"><li>Home</li></a>
					      <a href="#"><li>About</li></a>
					      <a href="#"><li>Museum</li></a>
					      <a href="#"><li>Gallery</li></a>
					      <a href="#"><li>Contact</li></a>
					      <a href="#"><li>Inventory</li></a>
					      <a href="#"><li>Sign In</li></a>
					    </ul>
					  </div>
				</nav>
			</div>
			);
	}

};