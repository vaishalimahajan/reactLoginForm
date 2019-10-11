import React, { Component } from 'react';

class LoginForm extends Component {
  // Using a class based component here because we're accessing DOM refs

  handleSignIn(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    this.props.onSignIn(username, password);
  }

  render() {
    return (
      <form className="box-container" onSubmit={this.handleSignIn.bind(this)}>
        {/* <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <input type="submit" value="Login" /> */}

        <label htmlFor="text">Username</label>
        <input
          name="text"
          type="text"
          ref="username"
          required
          placeholder="Enter you username"
        />

        <label htmlFor="text">Password</label>
        <input
          name="password"
          type="password"
          ref="password"
          required
          placeholder="Enter your password"
        />
        <button type="submit">Login</button>
      </form>
    );
  }
}

export default LoginForm;
