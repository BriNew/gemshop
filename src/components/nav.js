import React from 'react';
import {Link} from 'react-router-dom'
import './nav.css';
import {Story} from './story';
import {Widgets} from './widgets';
import {Photos} from './photos';

export class Nav extends React.Component {
	render() {
		return(
			<div>
				<nav>
					<ul>					
						<li>
							<Link to='/contactmain'>Contact</Link>
						</li>
						<li>
							<Link to='/photos'>Gallery</Link>
						</li>
						<li>
							<Link to='/museum'>Museum</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/'>Home</Link>
						</li>
					</ul>
				</nav>
			</div>
			);
	}

};