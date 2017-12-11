import React from 'react';

import {Slideshow} from './slideshow';
import {Widgets} from './widgets';

export class Home extends React.Component {
	render() {
		return (
			<div>
				<Slideshow />
				<Widgets />
			</div>
			)
	}
}