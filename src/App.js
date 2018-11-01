import React, { Component } from 'react';
import './App.css';
import Dashboard from './component/Dashboard'
import Header from './component/Header'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
  apiKey: "AIzaSyAvXjeUN_6dXHv0dRGMthal82ASiKqmWSQ",
  authDomain: "dagk-firebase.firebaseapp.com"
})
class App extends Component {
  state = {SignIn : false}
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () =>{
    firebase.auth().onAuthStateChanged(user => {
      this.setState({SignIn:!!user})
    })
  }

  render() {
    
    return (
      <div >
        {this.state.SignIn ?
        (
          <Dashboard/>
        )
        :
        (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )
        }
          
      </div>
    );
  }
}

export default App;
