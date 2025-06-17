import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
function App() {

  return (
    <>
    <div>
      <Navbar />
      <Home />
      <About/>
      <main>

        <section id="contact" className="section">
          <div className="card">
            <h1>Contact</h1>
            <p>Get in touch with us here.</p>
          </div>
        </section>
      </main>
    </div>
    </>
  )
}

export default App
