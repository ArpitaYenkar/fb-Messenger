import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import './App.css';
import db from "./firebase";
import firebase from "firebase";
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{}]);
  const [username, setusername] = useState('');

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc =>doc.data() ))
      })
  }, [])


  useEffect(() => {
    setusername(prompt('PLEASE ENTER YOUR NAME'))
  }, [])

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }


  return (
    <div className="App">
      <img src="data:image/png;base64,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"></img>
      <h1> MESSENGER </h1>
      <h2>Welcome {username} !!</h2>

      <form className="app__form">
        <FormControl>
          <InputLabel >Enter a message...</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
          <IconButton disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messsge
            <SendIcon />
          </IconButton>

        </FormControl>
      </form>

      <FlipMove>
        {
          messages.map( message => (
            <Message  username={username} message={message} />
          ))
        }
      </FlipMove>
    </div>
  );
}

export default App;
