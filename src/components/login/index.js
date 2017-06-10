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
    const { user, ...rest } = this.props;
    if (user.uid ) {
      return (
        <div className="login">
          <div>
            <button onClick={this.login}>Login Google</button>
          </div>
        </div>
      )
    } else {
      return(
        <Redirect to={{
          pathname: '/',
          state: { from: props.location }
        }}/>
      );
    }
  }
}

export default connect(Login);
