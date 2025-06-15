import { useState } from 'react'
import './App.css'
import ButtonList from './ButtonList.jsx'
import GoodreadsBookshelf from "react-goodreads-shelf"

const projects = [{title:"oplink", link:"https://github.com/wbalbuena/oplink", description:"public job listings scraper + filter + full-stack web app", tools:"Python, Selenium, React, Flask, HTML/CSS, PostgreSQL"}, 
  {title:"SongSurf", link:"https://github.com/comp195/SongSurf", description:"algorithmic music recommender full-stack web app integrating third-party API", tools:"Python, Flask, HTML/CSS, SQLite"},
  {title:"wbalbuena.github.io", link:"https://github.com/wbalbuena/wbalbuena.github.io", description:"personal website / portfolio", tools:"React, TailwindCSS, HTML/CSS"},
]

export default function App() {
  return (
    <>
      <h1>william b. balbuena</h1>
      <div className="icons">
        <a href="https://www.linkedin.com/in/william-balbuena/" target="_blank" ><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className="icon"/></a>
        <a href="https://github.com/wbalbuena" target="_blank" ><img src="https://img.icons8.com/?size=100&id=iEBcQcM9rnZ9&format=png&color=000000" className="icon"/></a>
      </div>
      <div className="container">
        <div className="twocolumns">
          <div className="cards">
            <div className="card">
              <b>about 🎓</b>
              <p>computer science, bs @ <span class="text-[#F47821]">university of the pacific</span></p>
            </div>
            <div className="card">
              <b>experiences 👔</b>
              <p>asic characterization junior engineer @ <span class="text-[#0078C1]">micron technology</span></p>
              <p>mustang tech squad @ <span class="text-[#fac624]">san joaquin delta college</span>, it department</p>
            </div>
            <div className="card">
              <b>awards 🥇</b>
              <p>valedictorian @ <span class="text-[#F47821]">university of the pacific</span></p>
              <p>1st @ 2021 sjcoe <span class="text-blue-400">h2o hackathon</span></p>
            </div>
            <div className="card">
              <b>languages 🗣</b>
              <p>i like coding with <span class="text-[#FFD43B]">python</span>, <span class="text-[#336791]">sql</span>, <span class="text-[#00599C]">c++</span></p>
              <p>i've had some work with: <span class="text-[#217346]">vba</span>, <span class="text-[#6E4C13]">assembly</span>, <span class="text-[#A8B9CC]">c</span>, <span class="text-[#E76F00]">java</span>, <span class="text-[#E34F26]">html</span> / <span class="text-[#1572B6]">css</span>, <span class="text-[#F7DF1E]">javascript</span></p>
            </div>
            <div className="card">
              <b>technologies 💻</b>
              <p>flask, <span class="text-[#61DAFB]">react</span>, <span class="text-[#43B02A]">selenium</span>, sqlite, postgresql, <span class="text-[#199F4B]">vim</span></p>
            </div>
            <div className="card">
              <b>misc</b>
              <p>104 wpm certified typing speed</p>
            </div>
          </div>
          <div className="cards">
            <div className="card">
              <b>currently reading 📚</b>
              <div className="bookshelf">
                <GoodreadsBookshelf userId="188900711-william" shelf="currently-reading" width="91.45px" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
            <b>projects 🎨</b>
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