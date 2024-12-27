import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Cart from '../pages/cart/Cart'
import Wishlist from '../pages/wishlist/Wishlist'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' index element={<Home/>}/>
            <Route path='/basket'  element={<Cart/>}/>
            <Route path='/wishlist'  element={<Wishlist/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router