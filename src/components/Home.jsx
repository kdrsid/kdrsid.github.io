import React from 'react'
import image from '../assets/selfimage.jpg';
import "./Home.css";
const Home = () => {
  return (
    <section id="home" className="section">
          <div className="home-card">
            <div className="text-container">
              <h1>Hello. I'm Chris</h1>
              <h3>Software Developer & Game Developer</h3>
              <p>I am currently a CS student in Simon Fraser University.</p>
            </div>
            <img className="image" src={image} alt="Image of me is not loaded." width={200} height={200} />
          </div>
        </section>
  )
}

export default Home