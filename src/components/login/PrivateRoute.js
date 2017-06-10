import React, {Component} from 'react'
import connect from 'milflux/connect';
import {Route, Redirect} from 'react-router-dom'

// const PrivateRoute = (, ) => (
    
//   <Route {...rest} render={props => (
//     fakeAuth.isAuthenticated ? (
//       <Component {...props}/>
//     ) : (
//       <Redirect to={{
//         pathname: '/login',
//         state: { from: props.location }
//       }}/>
//     )
//   )}/>
// )

class PrivateRoute extends React.Component {

  render() {
    const { user, component: Component, ...rest } = this.props;

    return (
      <Route {...rest} render={props => (
            user.uid ? (
            <Component {...props}/>
            ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}/>
            )
        )}/>
    );
  }
}

export default connect(PrivateRoute);