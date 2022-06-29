import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Main } from './pages/Main/Main'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
