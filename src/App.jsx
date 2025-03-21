import { useState } from 'react'
import './App.css'
import ButtonList from './ButtonList.jsx'

const projects = [{title:"oplink", link:"https://github.com/wbalbuena/oplink", description:"public job listings scraper + filter + full-stack web app", tools:"Python, Selenium, React, Flask, HTML/CSS, PostgreSQL"}, 
  {title:"SongSurf", link:"https://github.com/comp195/SongSurf", description:"algorithmic music recommender full-stack web app integrating third-party API", tools:"Python, Flask, HTML/CSS, SQLite"}
]

export default function App() {
  return (
    <>
      <h1>william b. balbuena</h1>
      <div className="card">
        <b>links</b>
        <p><a href="https://www.linkedin.com/in/william-balbuena/" target="_blank" >LinkedIn</a>, <a href="https://github.com/wbalbuena" target="_blank" >GitHub</a></p>
      </div>
      <div className="card">
        <b>about</b>
        <p>BS in Computer Science from <span class="text-[#F47821]">University of the Pacific</span></p>
      </div>
      <div className="card">
        <b>experiences</b>
        <p>ASIC Characterization Junior Engineer @ <span class="text-[#0078C1]">Micron Technology</span></p>
        <p>IT General Helper @ <span class="text-[#fac624]">San Joaquin Delta College</span>, IT Department</p>
      </div>
      <div className="card">
        <b>awards</b>
        <p>Valedictorian @ <span class="text-[#F47821]">University of the Pacific</span></p>
        <p>1st @ 2021 SJCOE <span class="text-blue-400">H2O Hackathon</span></p>
      </div>
      <div className="card">
        <b>languages</b>
        <p>I've worked a lot with: <span class="text-[#FFD43B]">Python</span>, <span class="text-[#336791]">SQL</span>, <span class="text-[#00599C]">C++</span>, <span class="text-[#E76F00]">Java</span>, <span class="text-[#E34F26]">HTML</span> / <span class="text-[#1572B6]">CSS</span>, <span class="text-[#F7DF1E]">JavaScript</span></p>
        <p>I've had some work with: <span class="text-[#217346]">VBA</span>, <span class="text-[#6E4C13]">Assembly</span>, <span class="text-[#A8B9CC]">C</span></p>
      </div>
      <div className="card">
        <b>technologies</b>
        <p>Flask, <span class="text-[#61DAFB]">React</span>, <span class="text-[#43B02A]">Selenium</span>, SQLite, PostgreSQL, <span class="text-[#199F4B]">vim</span></p>
      </div>
      <div className="card">
        <b>projects</b>
        <div className="projects">
        {
          projects.map((project, index) => (
            <Project
              key = {index}
              title = {project.title}
              link = {project.link}
              description = {project.description}
              tools = {project.tools}
            />
          ))
        }
        </div>
      </div>
      <div className="card">
        <b>misc</b>
        <p>104 WPM certified typing speed</p>
      </div>
    </>
  );
}

function Project( {title, link, description, tools } ){
  return (
    <>
      <a href={link} target="_blank" className="project">
        <h1>{title}</h1>
        <h2>{description}</h2>
        <p>{tools}</p>
      </a>
    </>
  )
}