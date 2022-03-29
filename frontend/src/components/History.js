import React,{useEffect,useState} from 'react'
import Message from './Message'

function History(props) {

    const [chatMessage, setChatMessage] = useState(props.chatHistory)

    useEffect(() => {

      setChatMessage(props.chatHistory)
    
    
    }, [props.chatHistory])
    

  return (
    <div>
        <h1 className='header'>Web Chat</h1>
        <div className='msg_box'>
        {chatMessage.map(msg => <Message message={msg} username={props.username}/>)}
        </div>
    </div>
  )
}

export default History