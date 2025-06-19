import React from 'react'
import "./About.css";

const skills = [
  { name: 'Lua', level: 80 },
  { name: 'Python', level: 80 },
  { name: 'C++', level: 65 },
];

const About = () => {
  return (
    <section id="about" className="section">
          <div className="card">
            <h1>About Me</h1>
            <p>About me!</p>
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
          </div>
        </section>
  )
}

export default About