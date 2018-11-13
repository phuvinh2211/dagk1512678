import React, { Component } from 'react'
import firebase from 'firebase';
import ChatList from './Chat-list'
import ChatHistory from './Chat-history'
import ChatMessage from './Chat-message'
import ChatHeader from './Chat-header'

class Dashboard extends Component {
  
  render() {
    
    return (
      <div >
        <div className="container clearfix">
        <button type="button" class="btn btn-primary" onClick={() => firebase.auth().signOut()}>Sign Out</button>
        <ChatList></ChatList>
        <div className="chat">
          <ChatHeader></ChatHeader>
          <ChatHistory></ChatHistory>
          <ChatMessage></ChatMessage>
        </div> {/* end chat */}
      </div> {/* end container */}
      </div>
    );
  }
}

export default Dashboard;
