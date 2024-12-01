import React from 'react'
import Home from "./pages/Home"
import Single from './pages/Single'
import Write from "./pages/Write"
import Settings from "./pages/Settings"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


export default function App() {
  const user = true
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={user ? <Home user={user} /> : <Register />} />
          <Route path='/login' element={user ? <Home user={user} /> : <Login />} />
          <Route path='/register' element={user ? <Home user={user} /> : <Register />} />
          <Route path='/settings' element={user ? <Settings user={user} /> : <Register />} />
          <Route path='/write' element={user ? <Write user={user} /> : <Register />} />
          <Route path='/single/:id' element={user ? <Single user={user} /> : <Register />} />
        </Routes>
      </Router>
    </div>
  )
}
