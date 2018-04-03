import React from 'react';
import './signup.css';
import {URL} from '../backend.js';

export class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.signUpUser=this.signUpUser.bind(this)
    }
      signUpUser(e) {
        e.preventDefault();
        fetch(URL + 'users', {
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
        .then(function(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
        }) .then(function(response) {
            alert("Thank you for signing up!");
        }) .then(function(response) {
            window.location.href = "/signin";
        })
          .catch(function(error) {
            console.log(error);
            alert('that username is taken');
        });
      }
    render() {
        return(
            <div>
        <ul className="sign_up_title content_title">
            <li className="sign_up"><h2>Sign&nbsp;Up</h2></li>
          </ul>
        <div className="sign_up_container_container content_container_container">
          <div className="sign_up_container content_container">
            <div className = "sign_up_info">
              <form role="form" className="default_form sign_up_form" onSubmit={this.signUpUser}>
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

