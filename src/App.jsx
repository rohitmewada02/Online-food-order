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
                <Route path='/login' element={<Login/>} />
                <Route path='/home' element={<Home/>} />
                <Route path='/card' element={<Card/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/alldish' element={<Alldish/>} />


         </Routes>
    </div>
      
  )
}

export default App
