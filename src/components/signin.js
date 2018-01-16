import React from 'react';
import {Link} from 'react-router-dom';
import {Slideshow} from './slideshow';
import './signin.css';


export class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.logInUser=this.logInUser.bind(this)
    }

    logInUser(e) {
        e.preventDefault();
        console.log('logging in');
        fetch('http://localhost:8080/signin', {
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
        }).then(function(response) {
            const currentUser = document.getElementById('username').value;
            console.log('user: ' + currentUser);
            console.log("ok");
            console.log(response);
            const {token} = response;
            localStorage.setItem('key', token );
            localStorage.setItem('user', document.getElementById('username').value );
            window.location.href = "/rocks";
        }).catch(function(error) {
            console.log(error, "not okay");
            alert('credentials are not valid');
        });
      }

    render() {
        return(
            <div>
                <Slideshow />
                <div className="sign_in_container_container">
                    <ul className="sign_in_title">
                        <li className="sign_in"><h2>Sign&nbsp;In</h2></li>
                    </ul>
                    <div className="sign_in_container">
                        <div className = "sign_in_info">
                    
                            <form className="sign_in_form" onSubmit={this.logInUser}>
                                <div>
                                    <label>Username:</label>
                                    <input id="username" type="text" name="username"/>
                                </div>
                                <div>
                                    <label>Password:</label>
                                    <input id="password" type="password" name="password"/>
                                </div>
                                <div>
                                    <input type="submit" value="Log In"/>
                                </div>
                                <div>
                                    
                                </div>
                            </form>
                            
                            <p className="sign_in_instructions">Not a registered user? Sign up <Link to='/signup' className="sign_up_link">here.</Link></p>
                            
                            
                        </div>
                    </div>
                </div>
            </div>

            );
    }
};

