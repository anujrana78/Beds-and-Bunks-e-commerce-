import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Signup from  '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
        <Route>
        <Route path='/home' element={<Home/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/' element={<Home/> }/>
        </Route>
    </Routes>
  )
}

export default Routers