import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from  '../pages/Signup'

const Routers = () => {
  return (
    <Routes>
        <Route>
        <Route path='/home' element={<Home/> }/>
        <Route path='/login' element={<Login/> }/>
        <Route path='/signup' element={<Signup/> }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/' element={<Home/> }/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:productId'element={<ProductDetails/>}/>
        </Route>
    </Routes>
  )
}

export default Routers