import React from 'react';
// import './signup.css';
import {Slideshow} from './slideshow';
let token = localStorage.getItem("key");


export class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.logOutUser=this.logOutUser.bind(this)
    }


      logOutUser(e) {
        e.preventDefault();
        console.log('logging out');
        localStorage.removeItem("key");
      }

    render() {
        return(
            <div>
              <form onSubmit={this.logOutUser}>
                <div>
                    <input type="submit" value="Log Out"/>
                </div>
              </form>
            </div>
            );
    }
};