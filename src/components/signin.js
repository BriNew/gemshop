import React from 'react';

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
            console.log("ok");
            console.log(response);
            const {token} = response;
            localStorage.setItem('key', token );
            window.location.href = "/rocks";
        }).catch(function(error) {
            console.log(error, "not okay");
            alert('credentials are not valid');
        });
      }

    render() {
        return(
            <form onSubmit={this.logInUser}>
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
            );
    }
};

