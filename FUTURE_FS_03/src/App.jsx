import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Menu from './components/Menu'
import Footer from './components/Footer'
import './index.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
      </main>
      <Footer />
    </div>
  )
}

export default App
