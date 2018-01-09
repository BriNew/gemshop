import React from 'react';

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

      // .then(function(response) {
      //   if (!response.ok) {
      //       throw Error(response.statusText);
      //   }
      //   return response.json();
      //   }).then(function(response) {
      //       console.log("ok");
      //       console.log(response);
      //       const {token} = response;
      //       localStorage.setItem('key', token );
      //   }).catch(function(error) {
      //       console.log(error, "not okay");
      //       alert('credentials are not valid');
      //   });

    render() {
        return(
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
            );
    }
};

