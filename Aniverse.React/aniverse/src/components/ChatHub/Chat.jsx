import React, { useEffect, useState } from 'react';
import Loby from './Loby';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatPage from './ChatPage';

function Chat() {
 const [connection, setConnection] = useState();
 const [messages, setMessage] = useState([]);

 const joinRoom = async (user, room) => {
  try {
   const connection = new HubConnectionBuilder()
    .withUrl('https://localhost:44320/chat')
    .configureLogging(LogLevel.Information)
    .build();
   connection.on('RecevieMessage', (user, message) => {
    setMessage((messages) => [...messages, { user, message }]);
   });
   await connection.start();
   await connection.invoke('JoinRoom', { user, room });
   setConnection(connection);
  } catch (error) {
   console.log(error);
  }
 };

 const sendMessage = async (message) => {
  try {
   await connection.invoke('SendMessage', message);
  } catch (error) {
   console.log(error);
  }
 };
 return (
  <div className="chat">
   <h2>Chat</h2>
   {!connection ? (
    <Loby joinRoom={joinRoom} />
   ) : (
    <ChatPage messages={messages} sendMessage={sendMessage} />
   )}
  </div>
 );
}
export default Chat;
