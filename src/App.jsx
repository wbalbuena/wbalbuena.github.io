import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <>
      <h1>WILLIAM BALBUENA</h1>
      <div className="card">
        <p>Languages: Python, C++, Java, SQL, HTML, CSS, JavaScript</p>
        <p>Frameworks: Flask, React</p>
        <p>Libraries: Selenium</p>
      </div>
      <div className="projects">
        <Project name="OutLinked" description="AUTOMATED WEB SCRAPER + WEB APPLICATION" languages="Python, HTML, CSS, JavaScript" technologies="React, Flask, Selenium, SQLite" />
        <Project name="SongSurf" description="MUSIC RECOMMENDATION WEB APPLICATION" languages="Python, HTML, CSS, JavaScript" technologies="Flask, SQLite" />
      </div>
    </>
  )
}

function Project({ name, description, languages, technologies }){
  return(
    <>
      <div className="project">
        <h1>{name}</h1>
        <h2>{description}</h2>
        <p>Languages: {languages}</p>
        <p>Technologies: {technologies}</p>
      </div>
    </>
  )
}
