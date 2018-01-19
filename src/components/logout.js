import React from 'react';
import {SignIn} from './signin';

let token = localStorage.getItem("key");
let currentUser = localStorage.getItem("user");


export class LogOut extends React.Component {
    constructor(props) {
        super(props);
        this.logOutUser=this.logOutUser.bind(this)
    }


      logOutUser() {
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