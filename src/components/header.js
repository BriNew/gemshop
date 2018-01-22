import React from 'react';
import './header.css';
import {LogOut} from './logout';
import {SignIn} from './signin';

let token = localStorage.getItem("key");
let currentUser = localStorage.getItem("user");

export class Header extends React.Component {
	constructor(props) {
        super(props);
         if(currentUser){
           this.state={loggedIn: true}; 
        }
        else{
        	this.state={loggedIn: false};
        }
    } 
	render() {
		let loggedInMessage;
		let logOutButton;
		if(this.state.loggedIn){
			loggedInMessage = <h3 className="current_user">Hello {currentUser}</h3>
			logOutButton = <LogOut />
		}
		return(
			<header role="banner">
				<div className="header_container">
					<h1 className="banner_fullscreen">Chapman's Gem & Mineral Shop</h1>
					<h1 className="banner_mobile">Chapman's Gem Shop</h1>
					<h1 className="banner_mobile_narrow">Chapman's</h1>
				</div>	
				<div className="current_user_logout_container">
					<div className="current_user_container">
						{loggedInMessage}
					</div>
					<div className="logout_container">
						{logOutButton}
					</div>
				</div>
			</header>
			);
	}
};