import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import Registration from './Components/Registration'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Employee from './Components/Employee'
import CreateEmployee from './Components/CreateEmployee'
import Title from './Components/Title'
import Edit from './Components/Edit'

import "./App.css"
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Title/>
      <Navbar/>
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/login" element = {<Login/>}/>
          <Route path = "/register" element = {<Registration/>}/>
          <Route path = "/addemployee" element = {<Employee/>}/>
          <Route path = "/createemployee" element = {<CreateEmployee/>}/>
          <Route path = "/edit" element = {<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
