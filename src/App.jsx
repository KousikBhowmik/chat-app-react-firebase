import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/login/login'
import Chat from './pages/chat/chat'
import Profile from './pages/profileUpdate/profileUpdate'




const App = () => {
  return (
    <>
     <Routes>
      <Route path='/' element= {<Login/>}/>
      <Route path='/chat' element= {<Chat/>}/>
      <Route path='/profile' element= {<Profile/>}/>
     </Routes>
    </>
  )
}

export default App