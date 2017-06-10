import React, { Component } from 'react';
import Home from 'components/home';
import NoMatch from 'components/nomatch';
import Login from 'components/login';
import PrivateRoute from 'components/login/PrivateRoute.js';
import Store from 'milflux/store';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Store>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Home}/>            
              <Route exact path="/login" component={Login}/>
              <Route component={NoMatch}/>
            </Switch>  
          </Router>
        </Store>
      </div>
    );
  }
}
export default App;