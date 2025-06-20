import React from 'react'
import "./About.css"
import luaicon from '../assets/luaicon.png'
import pythonicon from '../assets/Python.png'
import Cicon from '../assets/C++icon.png'
import jsicon from '../assets/JavaScript.png'
import htmlicon from '../assets/HTML5.png'
import cssicon from '../assets/CSS3.png'

const About = () => {
  const skills = [
  { name: 'Lua', level: 80 },
  { name: 'Python', level: 80 },
  { name: 'C++', level: 65 },
  { name: 'Html & Css', level: 60 },
  { name: 'JavaScript', level: 50 }
] ;
  return (
    <section id="about" className="section">
          <div className="card">
            <h1>About Me</h1>
            <p>Hello, my name is Chris Leung. I’m from Hong Kong and currently a student at SFU.
               I am learning data structures, AI algorithms, and web development to grow my skills. 
               My hobbies are basketball and gaming. 
               During my free time, I watch shorts or videos about AI automation, which I want to use and solve real-world problems. 
               If you are interested in programming as well, I would recommend <a href="https://www.codedex.io/home">Codedex.io</a>.
               It is a website that teaches about different programming languages, and it has a game element in it, which makes the learning process more fun. 
            </p>
            <div className="skills-bars">
              <h2>My Skills</h2>
              {skills.map((skill, index) => (
                <div key={index} className="skill">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ '--level': `${skill.level}%` }}>
                      <span className="skill-percent">{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className='imageicons'>
              <img src={luaicon} alt="Image of Lua icon is not loaded." width={60} height={60} />
              <img src={pythonicon} alt="Image of Python icon is not loaded." width={60} height={60} />
              <img src={Cicon} alt="Image of C++ icon is not loaded." width={60} height={60} />
              <img src={htmlicon} alt="Image of HTML icon is not loaded." width={60} height={60} />
              <img src={cssicon} alt="Image of Css icon is not loaded." width={60} height={60} />
              <img src={jsicon} alt="Image of JavaScript icon is not loaded." width={60} height={60} />
            </div>
          </div>
        </section>
  )
}

export default About