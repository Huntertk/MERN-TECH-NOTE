import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Layout from './components/Layout'
import { Toaster } from 'react-hot-toast';
import ProtectedRoutes from './pages/ProtectedRoutes'


const App = () => {
  return (
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          } />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App