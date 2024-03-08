import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './component/Menu'
import { ToastContainer } from 'react-toastify'
import Create from './pages/Create'
import Home from './pages/Home'
import Update from './pages/Update'


function App() {
  return (
      <BrowserRouter>
      
      <Menu/>
      <ToastContainer autoClose={4000} position={'bottom-right'}/>
      <Routes>
        <Route path={'/'} element={<Home/>}/>
        <Route path={'/user/create'} element={<Create/>}/>
        <Route path={'/user/edit/:id'} element={<Update/>}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App
