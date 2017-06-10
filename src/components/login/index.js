import React, { Component } from 'react';
import connect from 'milflux/connect';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

class Login extends Component {

  login = () => {
    const { dispatch } = this.props;
    dispatch({
      type: 'login'
    })
  }

  logout = () => {
  }

  render () {
    return (
      <div className="login">
        <div>
          <button onClick={this.login}>Login Google</button>
        </div>
      </div>
    )
  }
}

export default connect(Login);
