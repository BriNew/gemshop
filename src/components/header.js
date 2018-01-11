import React from 'react';
import './header.css';
import {LogOut} from './logout';
import {SignIn} from './signin';

let currentUser = localStorage.getItem("user");

export class Header extends React.Component {
	constructor(props) {
        super(props);
        this.users=this.users.bind(this)
    } 

	users() {
		// let token = localStorage.getItem("key");
		// if(token != null){
		// 	return <LogOut />;
		// }
		// else {
		// 	console.log('null' + token);
		// }
		return <LogOut />;
	}

	render() {
		return(
			<header>
				<div className="header_container">
					<h1 className="banner_fullscreen">Chapman's Gem & Mineral Shop</h1>
					<h1 className="banner_mobile">Chapman's Gem Shop</h1>
				</div>	
				<div className="current_user_logout_container">
					<div className="current_user_container">
						<h3 className="current_user">Welcome {currentUser}</h3>
					</div>
					<div className="logout_container">
						<LogOut />
					</div>
				</div>

			</header>
			);
	}
};