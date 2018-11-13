import React, { Component } from 'react'
import $ from 'jquery';
import firebase from 'firebase';
class ChatMessage extends Component {
  constructor(props,context) {
    super(props,context)
    this.updateMessage =this.updateMessage.bind(this)
    this.submitMessage = this.submitMessage.bind(this)
    this.state = { 
      message : ''
     }
  }
  updateMessage(event){
    this.setState({
      message: event.target.value,
    })
  }
  submitMessage(event){   
    console.log('vinh')
    var user = firebase.auth().currentUser.uid;
    console.log('submit message :' + this.state.message);
    const nextMessage = {
      id: this.state.message.length,
      text:this.state.message
    }
    firebase.database().ref('users/' + user).push(nextMessage)
    $("textarea#message-to-send").val('');
  }
  render() {
    return (
        <div className="chat-message clearfix">
            <textarea name="message-to-send" id="message-to-send" 
            placeholder="Type your message" rows={3} defaultValue={""} onChange={this.updateMessage} />
            <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
            <i className="fa fa-file-image-o" />
            <button onClick={this.submitMessage}>Send</button>
        </div>
    );
  }
}

export default ChatMessage;
