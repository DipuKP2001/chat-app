import React from 'react'

import './App.css'

import {ChatEngine} from 'react-chat-engine'

import ChatFeed from './components/ChatFeed'

const projectID = process.env.REACT_APP_API_KEY
const userName = process.env.REACT_APP_USER_NAME
const userSecret = process.env.REACT_APP_USER_SECRET

const App = () => {
    return(   
        <ChatEngine 
            height="100vh" 
            projectID={projectID}
            userName={userName}
            userSecret={userSecret}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App