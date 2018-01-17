import React from 'react';
import './story.css';
import {Slideshow} from './slideshow';



export class Story extends React.Component {
	render() {
		return (
			<div>
				<div>
					  <ul className="story_title">
				        <li className="about"><h2>About</h2></li>
				      </ul>
			    </div>

				<div className="story_container_container">

					<div className="story_container">
						<div className = "story">
							<p className="story_line_1">
							How it all started:
							</p>
							
							
							<p>Buzz and Charlotte Chapman opened their first rock shop in 1950, 
							on the Rogue River in Oregon. It was named the Gem Cottage. In 1959, 
							they opened their second rock shop in Miranda, California under its current name, 
							Chapman's Gem and Mineral Shop. There was no room to display their growing 
							collection in either of the first two shops.</p>

							<p>When it became evident that the highway 101 was to bypass Miranda, 
							they relocated to their present location in 1963, building the current sales 
							room to house both the museum collection and the retail business.</p>

							<p>A second wing was added in 1985, at which time both the sales room and the 
							museum were expanded.</p>

							<p>Together Buzz and Charlotte worked to build their business.Over the years, 
							Buzz worked in the woods, drove laundry truck, peeled tan bark, ran a split yard, 
							and in the latter years became a masonry contractor while Charlotte ran the business.</p>

							<p>Buzz and Charlotte worked side-by-side both collecting and finishing stones. 
							In the early years most of their collecting was done in the western United States. 
							But since the 1970's they traveled throughout the world in search of new specimens. 
							They have been to Central America, South America, Australia, Asia, Africa,
							the Middle East, and Southern Europe.</p>

							<p>How it still continues:</p>
							
							<p>In 2001 Chapman's Gem and Mineral Shop switched hands to Buzz and Charlotte's daughter Sharon 
							and her husband Lyle Brown. Sharon and Lyle have taken on the duty of collecting 
							and adding to the collection. Charlotte still comes out to make sure things are 
							in order and running smoothly. They hope to open an additional museum displays in the near future.</p>
							
						</div>
					</div>
				</div>
			</div>
			)
	}
}


