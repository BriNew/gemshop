import React from 'react';

export class PostTest extends React.Component {
  constructor(props) {
    super(props);
    this.createRock=this.createRock.bind(this)
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

  // handleClick(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log("handling clicks");
  //   this.createRock('element clicked');
  // }


  render() {
    return (
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
          <button onClick={this.createRock}>Click</button>
        </div>
      </form>
      );
  }

}

