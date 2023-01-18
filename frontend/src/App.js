import React, { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Pusher from 'pusher-js'
import axios from './axios';

const App = () => {
  const [messages, setMessages] = useState([])
 
  useEffect(() => {
    axios.get('/messages/sync').then(response => {

      setMessages(response.data)
    })
  }, [])

  useEffect(() => {
      const pusher = new Pusher('a68439674bd6a6dc8d52', {
      cluster: 'ap1'
    });

      const channel = pusher.subscribe('messages');
      channel.bind('inserted', function(newMessage) {
     
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)
  return (
    <div className='app'>
      
      <div className='app_body'>
        <Sidebar/>
        <Chat messages={messages}/>
      </div> 
    </div>
  )
}

export default App