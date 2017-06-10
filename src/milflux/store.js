import React from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase';
import uuid from 'uuid';

class Store extends React.Component {

  static childContextTypes = {
    user: PropTypes.object,
    list: PropTypes.array,
    dispatch: PropTypes.func,
  }

  state = {
    config: {},
    user:{
      isAuthenticated: false,
      name: '',
      email: '',
      photoUrl: '',
      uid: ''
    },
    list: [
      {
        uid: uuid(),
        premium: true,
        name: 'Heineken',
        brewery: 'Heineken',
      }
    ],
  }

  getChildContext() {
    return {
      user: this.state.user,
      list: this.state.list,
      dispatch: this.dispatch,
    };
  }

  dispatch = action => {

    if (action.type === 'add') {
      this.add();
    }

    if (action.type === 'remove') {
      this.remove(action.payload);
    }

    if (action.type === 'edit') {
      this.edit(action.payload);
    }

    if (action.type === 'login') {
      this.login();
    }
  }

  remove = (uid) => {
    this.setState({
      ...this.state,
      list: this.state.list.reduce(
        (newList, item) => {
          if (item.uid !== uid) {
            newList.push(item);
          }
          return newList;
        },
        []
      ),
    });
  }

  add = () => {
    const newList = this.state.list;
    newList.push({ name: '', uid: uuid() });
    this.setState({
      ...this.state,
      list: newList,
    });
  }

  edit = ({ target: { dataset, name, value } }) => {
    const { list } = this.state;
    this.setState({
      ...this.state,
      list: list.map(item => {
        if (item.uid === name) {
          item.premium = (value === 'Baden');
          if (dataset['name'] === 'brewery') {
            item.brewery = value;
          }
          if (dataset['name'] === 'name') {
            item.name = value;
          }
        }
        return item;
      }),
    });
  }

  login = () => {
    //Firebase Authentication
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const newUser = {
        isAuthenticated: true,
        name: result.user.displayName,
        email: result.user.email,
        photoUrl: result.user.photoURL,
        uid: result.user.uid
      };
      this.setState({
        ...this.state,
        user: newUser
      });
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
      alert("Login ERROR: " + errorMessage)
    });
  }
      
  render () {
    return this.props.children;
  }
}

export default Store;
