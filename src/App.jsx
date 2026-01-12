import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AutomationSolutions from './pages/AutomationSolutions'
import ProductDetail from './pages/ProductDetail'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/power-battery-automation-solutions" element={<AutomationSolutions />} />
          <Route path="/product-info2/19" element={<ProductDetail />} />
          <Route path="/" element={<AutomationSolutions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

