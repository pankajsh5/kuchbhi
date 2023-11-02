import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import Home from './pages/Home'

function App() {


  return (
    <>
     <Header/>
     
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<Login/>}/>
     </Routes>
     
     
    </>
  )
}

export default App
