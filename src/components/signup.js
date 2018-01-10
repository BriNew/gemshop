import React from 'react';
import './signup.css';
import {Slideshow} from './slideshow';


export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.signUpUser=this.signUpUser.bind(this)
    }

      signUpUser(e) {
        e.preventDefault();
        console.log('signing up');
        fetch('http://localhost:8080/users', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
          })
        })
      }

    render() {
        return(
            <div>
        <Slideshow />
        <div className="sign_up_container_container">
          <ul className="sign_up_title">
            <li className="sign_up"><h2>Sign&nbsp;Up</h2></li>
          </ul>
          <div className="sign_up_container">
            <div className = "sign_up_info">
              <form onSubmit={this.signUpUser}>
                <div>
                    <label>Username:</label>
                    <input id="username" type="text" name="username"/>
                </div>
                <div>
                    <label>Password:</label>
                    <input id="password" type="password" name="password"/>
                </div>
                <div>
                    <input type="submit" value="Sign Up"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
            );
    }
};

