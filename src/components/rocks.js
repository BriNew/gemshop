import React from 'react';


export class Rocks extends React.Component {

	componentDidMount() {
		console.log('mount');
		fetch('http://localhost:8080/rocks') 
		.then(res => {
			res.json().then(response => {
				console.log(response);


			})
		})
	}

	render() {
		return(
			<div>
    			
    			
  			</div>
			);
	}
};
