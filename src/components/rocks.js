import React from 'react';

export class Rocks extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/rocks')
    .then(results => {
    	return results.json();
    }).then(data => {
    	let cats = data.rocks.map((data) => {
    		return(
    			<div >
    				<p>{data.type}</p>
    				<p>{data.origin}</p>
    				<p>{data.size}</p>
    				<p>{data.color}</p>
    			</div>
    			)
    	})
    	this.setState({cows: cats});
    	console.log("state", this.state.rocks)
    })
  }

  render() {
  	return (
	<div>
		{this.state.cows}
	</div>
  		)
  }
}



// export class Rocks extends React.Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			rocks: []
// 		};
// 	}

// 	componentDidMount() {
// 		console.log('mount');
// 		fetch('http://localhost:8080/rocks') 
// 		.then(res => {
// 			res.json().then(response => {
// 				console.log(response);
// 			})
// 		})
// 	}



// 	render() {
// 		return(
// 			<div>
    			
//   			</div>
// 			);
// 	}
// };
