import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/Cart'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Shop from '../pages/Shop'
import Signup from  '../pages/Signup'
import Signin from '../pages/Signin'

const Routers = () => {
  return (
    <Routes>
        <Route>
        <Route path='/home' element={<Home/> }/>
        <Route path='/signin' element={<Signin/> }/>
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