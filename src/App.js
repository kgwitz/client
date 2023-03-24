import React from 'react'
import { useState, useEffect } from 'react'
import { Login } from './ApiRequests.js'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import LoginPage from "./Components/Login/Login"
import 'bootstrap/dist/css/bootstrap.min.css';

import { userContext } from './Components/userContext'

const App = () => {
  const [userLogin, setUserLogin] = useState(false)
  const [user, setUser] = useState({ userName: '', _id: '' })

  const handleLogout = () => {
    setUserLogin(false)
  }

  useEffect(() => {
    if (localStorage.getItem('userId') && localStorage.getItem('userId') != '') {
      const userId = localStorage.getItem('userId')
      const userName = localStorage.getItem('userName')

      if (!userLogin) {
        setUserLogin(true)
        setUser({ userName: userName, _id: userId })
      }
    }
  }, [])

  return (
    <div className='App'>
      <userContext.Provider value={{ userLogin: userLogin, user: user, logout: handleLogout, setUserLogin, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>

        <Footer />
      </userContext.Provider>
    </div>
  );
}

export default App;