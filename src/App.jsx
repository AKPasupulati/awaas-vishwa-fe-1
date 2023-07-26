import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import WishlistPage from './pages/WishlistPage'
import CreateAdPage from './pages/CreateAdPage'
import EditAdPage from './pages/EditAdPage'
import PageNotFound404 from './pages/PageNotFound404'
import MainLayout from './layouts/MainLayout'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />} />
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='*' element={<PageNotFound404 />} />
    </Routes>
  )
}

export default App



