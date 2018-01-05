import React from 'react';

import './rocks.css';

export class Rocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rocks: []
    };
    this.createRock=this.createRock.bind(this)
    this.deleteRock=this.deleteRock.bind(this)
    this.editRock=this.editRock.bind(this)
  }
  
  componentDidMount() {
    var token = localStorage.getItem("key");
    fetch('http://localhost:8080/rocks', {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(results => {
    	return results.json();
    }).then(data => {
      console.log(data);
    	let rock = data.rocks.map((data, i) => {
    		return(
    			<div key={i} className="rocks" >
    				<p>{data.type}</p>
    				<p>{data.origin}</p>
    				<p>{data.size}</p>
    				<p>{data.color}</p>
            <p>{data.id}</p>
           <button onClick={() => this.deleteRock(data.id)}>Remove</button>        
            <button onClick={this.editRock}>Edit</button>
    			</div>
    			)
    	})
    	this.setState({rocks: rock});
    	console.log("state", this.state.rocks)
    })
  }

  createRock() {
    console.log('creating rocks');
    fetch('http://localhost:8080/rocks', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: document.getElementById('type').value,
        origin: document.getElementById('origin').value,
        size: document.getElementById('size').value,
        color: document.getElementById('color').value
      })
    })
  }

  deleteRock(e) {
      console.log(e);
      fetch(`http://localhost:8080/rocks/${e}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },

    })
  }

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
  	return (
    	<div>
    		{this.state.rocks}
        <form>
            <div>
              <label>type</label>
              <div>
                  <input id= "type" name="type"></input>           
              </div>
            </div>
            <div>
              <label>origin</label>
              <div>
                  <input id= "origin" name="origin"></input>           
              </div>
            </div>
            <div>
              <label>size</label>
              <div>
                  <input id= "size" name="size"></input>           
              </div>
            </div>
            <div>
              <label>color</label>
              <div>
                  <input id= "color" name="color"></input>           
              </div>
            </div>
            <div>
              <button onClick={this.createRock}>Add</button>
            </div>
          </form>
    	</div>
  		)
  }
}

    // handleClickDelete(e) {
    //   e.preventDefault();
    //   this.deleteRock('element clicked');
    // }
   

//handle clicks or constructor? no preventDefault with constructor
//delete
//authentication, where to start


