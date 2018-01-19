import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';


export class Nav extends React.Component {

    refreshHome(e){
    	e.preventDefault();
    	window.location.reload();
    }
	render() {
		return(
			<div>
				<nav>
					<ul className="nav_ul">
						<li className="nav_li">
							<Link to='/signin'>Sign In</Link>
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
						<li onClick={this.refreshHome}className="nav_li ">
							<Link to='/'>Home</Link>
						</li>
						<li className="social_li social_li_fb">
							<a target="_blank" href="https://www.facebook.com/pages/Chapmans-Gem-Mineral-Shop-Museum/127570647298100" className="fa fa-facebook"></a>
						</li>
						<li className="social_li social_li_yelp">
							<a target="_blank" href="https://www.yelp.com/biz/chapmans-gem-and-mineral-shop-and-museum-fortuna" className="fa fa-yelp"></a>
						</li>
						<li className="social_li social_li_instagram">
							<a target="_blank" href="https://www.instagram.com/explore/locations/260451233/" className="fa fa-instagram"></a>
						</li>
						<li className="social_li social_li_tripadvisor">
							<a target="_blank" href="https://www.tripadvisor.com/Attraction_Review-g32404-d2161569-Reviews-Chapman_s_Gem_Mineral_Shop_Museum-Fortuna_Humboldt_County_California.html" className="fa fa-tripadvisor"></a>
						</li>
					</ul>
					<div className="hamburger">

					    <input type="checkbox" />
					       
					    <span className="burger"></span>
					    <span className="burger"></span>
					    <span className="burger"></span>
					    
					    <ul className="hamburger_menu">
					      <a><li><Link to='/'>Home</Link></li></a>
					      <a><li><Link to='/about'>About</Link></li></a>
					      <a><li><Link to='/museum'>Museum</Link></li></a>
					      <a><li><Link to='/photos'>Gallery</Link></li></a>
					      <a><li><Link to='/contactmain'>Contact</Link></li></a>
					      <a><li><Link to='/rocks'>Inventory</Link></li></a>
					      <a><li><Link to='/signin'>Sign In</Link></li></a>
					    </ul>
					  </div>
				</nav>
			</div>
			);
	}

};