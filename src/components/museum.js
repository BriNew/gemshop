import React from 'react';
import './museum.css';

export class Museum extends React.Component {
	render() {
		return (
			<div>
				<div>
					  <ul className="museum_title content_title">
				        <li className="museum content"><h2>Museum</h2></li>
				      </ul>
			    </div>
				<div className="museum_container_container content_container_container">
					<div className="museum_container content_container">
						<div className = "museum_info">
							<p className="museum_first_line">
							Museum:
							</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas dictum 
							odio at rutrum. In est tellus, rutrum eu feugiat vitae, eleifend finibus lacus. 
							Duis ac odio congue magna imperdiet dictum eu id enim. Donec pretium ex vel rhoncus blandit. 
							Pellentesque fermentum accumsan commodo. Donec id lobortis leo, nec luctus magna. 
							Sed eget porta arcu. Cras quis consectetur ante. Ut mollis et arcu sed euismod. 
							In nec pulvinar orci. Pellentesque iaculis ut ligula non porttitor. 
							Etiam euismod interdum dui non convallis. Aliquam erat volutpat. 
							Nulla pretium ante vel magna volutpat tincidunt. Aliquam erat volutpat. 
							In rutrum ipsum tellus, ut auctor arcu tincidunt et. Nam eu nisl in magna iaculis hendrerit eu eget enim. 
							Aliquam vulputate, neque eu blandit rhoncus, massa felis pharetra quam, et tempor arcu massa in massa. 
							Cras rutrum tempus egestas. Praesent a finibus augue, et tincidunt massa.</p>
							
						</div>
					</div>
				</div>
			</div>
			
			)
	}
}