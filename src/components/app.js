import React from 'react';
import {Nav} from './nav';
import {Main} from './main';
import {Rocks} from "./rocks";

export class App extends React.Component {

	render() {
		return(
			<div>
    			<Nav />
    			<Main />
    			<Rocks />
  			</div>
			);
	}
};

