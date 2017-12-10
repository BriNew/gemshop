import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import showResults from "./showresults";
import Contact from "./contact";

export class ContactMain extends React.Component {
	render() {
		return(
			<Provider store={store}>
			    <div style={{ padding: 15 }}>
			      <h2>Contact Us</h2>
			      <Contact onSubmit={showResults} />
			    </div>
			  </Provider>
			);
	}
};

