import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NavBar } from './components/NavBar'
import { Main } from './pages/Main/Main'
import { AddBook } from './pages/AddBook/AddBook'
import { EditBook } from './pages/EditBook/EditBook'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/new-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
