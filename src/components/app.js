import React from 'react';
import {Nav} from './nav';
import {Main} from './main';

export class App extends React.Component {
	render() {
		return(
			<div>
    			<Nav />
    			<Main />
  			</div>
			);
	}
};

