import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { authData } from './Components/Global/Global'
import Header from './Components/Header'
import Home from './Components/Home'
import Productpage from './Components/Productpage'
import SignUp from './Components/SignUp'
import {useRecoilValue} from "recoil"
import { ProtectedRoutes } from './Components/ProtectedRoutes'

const App = () => {
  
  const user = useRecoilValue(authData)

  return (
    <BrowserRouter>
    {user ? <Header/> : null}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/display" element = {<ProtectedRoutes/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default App
