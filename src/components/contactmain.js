import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import showResults from "./showresults";
import Contact from "./contact";
import './contactmain.css';



export class ContactMain extends React.Component {
	render() {
		return(
			  <div>
				  <ul className="contact_title content_title">
				      <li className="contact content"><h2>Contact&nbsp;Us</h2></li>
				  </ul>
				<div className="contact_container_container content_container_container">
					<div className="contact_container content_container">
						<div className = "contact_info">
							<Provider store={store}>
							    <div style={{ padding: 15 }}>
							      <Contact onSubmit={showResults} />
							    </div>
							  </Provider>
						</div>
					</div>
				</div>
			</div>
			);
	}
};

