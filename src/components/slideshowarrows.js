import React from 'react';
import './slideshowarrows.css';


export class SlideshowArrows extends React.Component {
	render() {
		return(
				<div>
					<a className="previous_slide" href="#"><i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i></a>
    				<a className="next_slide" href="#"><i class="fa fa-chevron-right fa-2x" aria-hidden="true"></i></a>
				</div>
		);
	}
};