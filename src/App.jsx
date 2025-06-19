import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
function App() {

  return (
    <>
    <div className="main-container">
      <Navbar/>
      <Home/>
      <About/>
      <main>
        <section id="contact" className="section">
          <div className="card">
            <h1>Contact</h1>
            <p>Get in touch with us here.</p>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
    </>
  )
}

export default App
