import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './components/register/Register'
import Login from './components/login/Login'
import Home from './components/home/Home'
import Card from './components/card/Card'
import Profile from './components/profile/Profile'
import Alldish from './components/alldish/Alldish'

function App() {
  return (
    <div>
         <Routes>
                <Route path='/' element={<Register/>} />
                <Route path='/' element={<Login/>} />
                <Route path='/' element={<Home/>} />
                <Route path='/' element={<Card/>} />
                <Route path='/' element={<Profile/>} />
                <Route path='/' element={<Alldish/>} />


         </Routes>
    </div>
      
  )
}

export default App
