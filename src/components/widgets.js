import React from 'react';
import './widgets.css';

export class Widgets extends React.Component {
	render() {
		return(
			<div>
				<div className="ta_widget">TripAdvisor</div>
				<div className="map_widget">GoogleMaps</div>
			</div>
			)
	}
};