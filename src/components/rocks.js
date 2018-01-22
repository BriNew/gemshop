import React from 'react';
import './rocks.css';
import {URL} from '../backend.js';

export class Rocks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rocks: []
    };
    this.createRock=this.createRock.bind(this)
    this.deleteRock=this.deleteRock.bind(this)
  }
  componentDidMount() {
    let token = localStorage.getItem("key");
    fetch(URL + 'rocks', {
      method: 'GET',
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
    .then(function(results) {
        if (!results.ok) {
            console.log('not okay');
            throw Error(results.statusText);
        }
        return results.json();
    }).then(data => {
      let rock = data.rocks.map((data, i) => {
        return(
          <div key={i} className="rocks" >
            <p>Type: {data.type}</p>
            <p>Origin: {data.origin}</p>
            <p>Size: {data.size}</p>
            <p>Color: {data.color}</p>
            <div className="button_container">
              <button className="remove_button" onClick={() => this.deleteRock(data.id)}>Remove</button>                 
            </div>
          </div>
          )
      })
      this.setState({rocks: rock});
    }).catch(function(error) {
        console.log(error);
        localStorage.removeItem("key");
        window.location.href = "/signin";
    });
  }
  createRock(e) {
    e.preventDefault();
    fetch(URL + 'rocks', {
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
    .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        }).then(function(response) {
            window.location.href = "/rocks";
        }).catch(function(error) {
            console.log(error);
        });
  }
  deleteRock(e) {
      fetch(`${URL}rocks/${e}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
    })
      .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        }).then(function(response) {
            window.location.href = "/rocks";
        }).catch(function(error) {
            console.log(error);
        });
  }
  render() {
  	return (
    	<div>
        <ul className="inv_title content_title">
            <li className="inv content"><h2>Inventory</h2></li>
          </ul>
        <div className="inv_container_container content_container_container">
          <div className="inv_container content_container">
            <div className = "inv_info">
              <div className="form_container">
                <form role="form" className="rocks add_rocks">
                    <div>
                      <div>
                          <input className="add_input" placeholder="Type" id= "type" name="type"></input>           
                      </div>
                    </div>
                    <div>
                      <div>
                          <input className="add_input" placeholder="Origin" id= "origin" name="origin"></input>           
                      </div>
                    </div>
                    <div>
                      <div>
                          <input className="add_input" placeholder="Size" id= "size" name="size"></input>           
                      </div>
                    </div>
                    <div>
                      <div>
                          <input className="add_input" placeholder="Color" id= "color" name="color"></input>           
                      </div>
                    </div>
                    <div className="button_container">
                      <button className="add_button" onClick={this.createRock}>Add</button>
                    </div>
                  </form>
              {this.state.rocks}
              <div>           
            </div>
          </div>
        </div>
      </div>
    	</div>
      </div>
  		)
  }
}



