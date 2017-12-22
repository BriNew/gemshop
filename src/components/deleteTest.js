import React from 'react';

export class DeleteTest extends React.Component {

	constructor(props) {
    super(props);
    this.deleteRock=this.deleteRock.bind(this)
  }

	deleteRock() {
	    console.log('deleting rock');
	    fetch('http://localhost:8080/rocks/5a3c9e6a5d5f6d39f8c31136', {
	      method: 'DELETE',
	      headers: {
	        'Accept': 'application/json',
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify({
	      
	        
	    })

	  })
  }

  	// handleClickDelete(e) {
  	// 	e.preventDefault();
  	// 	this.deleteRock('element clicked');
  	// }
  	// <button onClick={this.handleClickDelete.bind(this)}>Remove</button>

	render() {
		return(
			<div>
				<button onClick={this.deleteRock}>Remove</button>		
			</div>
			)
	}


}