import React from 'react';
// import './signup.css';
import {Slideshow} from './slideshow';
import {SignIn} from './signin';

let token = localStorage.getItem("key");
let currentUser = localStorage.getItem("user");


export class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.logOutUser=this.logOutUser.bind(this)
    }


      logOutUser(e) {
        // e.preventDefault();
        console.log('logging out');
        localStorage.removeItem("key");
        localStorage.removeItem("user");
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