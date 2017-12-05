import React from 'react';
import {Nav} from './nav';
import {Header} from './header';

export default class Main extends React.Component {
	render() {
		return(
			<div>
				<Header />
				<Nav />
			</div>
		);	
	}
};