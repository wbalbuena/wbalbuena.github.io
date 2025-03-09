import './App.css'
import ButtonList from './ButtonList.jsx'

const outlinked = {
    image: "../public/img1.PNG",
    name: "oplink",
    description: "Automated job listings web scraper + web application",
    languages: "Python, HTML, CSS, JavaScript",
    technologies: "React, Flask, Selenium, SQLite"
}

export default function Projects(){
    return(
      <>
        <h1>PROJECTS</h1>
        <ButtonList />
        <div className="projects">
            <Project image={outlinked.image} name={outlinked.name} description={outlinked.description} languages={outlinked.languages} technologies={outlinked.technologies} />
            <Project name="SongSurf" description="Algorithmic music recommendation web application" languages="Python, HTML, CSS, JavaScript" technologies="Flask, SQLite" />
        </div>
        <a href="https://www.linkedin.com/in/william-balbuena/" target="_blank"><p>For more information, connect with me on LinkedIn!</p></a>
      </>
    )
  }
  
  function Project({ image, name, description, languages, technologies }){
    return(
      <>
        <div className="project">
          <img src={image} />
          <h2>{name}</h2>
          <p>{description}</p>
          <p><b>Languages</b>: {languages}</p>
          <p><b>Technologies</b>: {technologies}</p>
        </div>
      </>
    )
  }