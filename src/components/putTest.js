import React from 'react';

export class PutTest extends React.Component {

	editRock() {
	    console.log('deleting rock');
	    fetch('http://localhost:8080/rocks/:id', {
	      method: 'PUT',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify({
	        type: "type",
	        origin: "origin",
	        size: "size",
	        color: "color"
	    })

	  })
  }

	render() {
		return(
			<div>
				<button>Edit</button>
			</div>
			)
	}

}