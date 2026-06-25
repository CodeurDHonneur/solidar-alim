import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Accueil'
import About from './pages/About'
import Donation from './pages/Donation'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/donation' element={<Donation />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
   
  )
}

export default App