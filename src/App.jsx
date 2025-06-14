import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
    <div>
      <Navbar />
      <main>
        <section id="home" className="section">
          <div className="card">
            <h1>Home</h1>
            <p>Welcome to the homepage!</p>
          </div>
        </section>

        <section id="about" className="section">
          <div className="card">
            <h1>About</h1>
            <p>This is where you describe your site or yourself.</p>
          </div>
        </section>

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
