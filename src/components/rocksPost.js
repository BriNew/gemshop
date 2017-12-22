import React from 'react';

export class RocksPost extends React.Component {

  constructor(props) {
    console.log('hey from rocksPost');
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
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      })

    })
  };

  


  render() {
    console.log('hey from rocksPost');
    return (
      <form>
        <div>
          <label>type</label>
          <div>
              <input name="type"></input>           
          </div>
        </div>
        <div>
          <label>origin</label>
          <div>
              <input name="origin"></input>           
          </div>
        </div>
        <div>
          <label>size</label>
          <div>
              <input name="size"></input>           
          </div>
        </div>
        <div>
          <label>color</label>
          <div>
              <input name="color"></input>           
          </div>
        </div>
        
        <div>
          <button type="submit" onSubmit={this.createRock}>Submit</button>


        </div>
      </form>
  );
  }


}

