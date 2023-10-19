import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Registration from './Components/Registration'
import Secret from './Components/Secret'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <>
      <BrowserRouter>
      {/* <Navbar/> */}
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Registration/>}/>
          <Route path = "/secret" element = {localStorage.length > 0 ? <Secret/> : <Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
