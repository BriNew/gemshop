import React from 'react';
import './widgets.css';

export class Widgets extends React.Component {
	render() {
		return(
			<div>
			<div>
			<ul className="widget_titles">
	
				        <li className="location"><h2>Home</h2></li>
				      </ul>
			</div>
			<div className="widget_container_container">
				
		    	<div className="widget_container" className="widget_container">
				      
			      <div id="TA_selfserveprop774" className="ta_widget_container_desktop">
              <ul id="0hMMZifw6g" class="TA_links V8th9Pr6YN">
                <li id="tr9bRR" class="VSIgkvQb">
                  <a target="_blank" href="https://www.tripadvisor.com/">
                  <img src="https://www.tripadvisor.com/img/cdsi/img2/branding/150_logo-11900-2.png"
                  alt="TripAdvisor"/></a>
                </li>
              </ul>
            </div>
            <script src="https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=774&amp;
            locationId=2161569&amp;lang=en_US&amp;rating=true&amp;nreviews=3&amp;
            writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=&amp;display_version=2"></script>
            	<div className="map_widget_container">
			      <iframe className="map_widget" width="500px" height="375px" frameborder="0" 
			      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJE-VJ-QsO1FQRIQFQSgU1gvc&key=AIzaSyDrWGFKHiOsKlelMMMxkl0_J_KBOCThMmU" 
			      allowfullscreen></iframe>
		      	</div>
			    </div>
			</div>
			</div>
			)
	}
};