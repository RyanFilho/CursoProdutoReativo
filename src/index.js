import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import firebase from 'firebase'
import './index.css';

// Initialize Firebase
const config = {
apiKey: "AIzaSyAS04qcDSH-M7e6mql9kFqDlsZPZjQ_lC4",
authDomain: "produtoreativo.firebaseapp.com",
databaseURL: "https://produtoreativo.firebaseio.com",
projectId: "produtoreativo",
storageBucket: "produtoreativo.appspot.com",
messagingSenderId: "392507154520"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
