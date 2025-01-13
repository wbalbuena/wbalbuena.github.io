import './App.css'
import ButtonList from './ButtonList.jsx'

export default function About() {
  return (
    <>
      <h1>ABOUT</h1>
      <ButtonList />
      <div className="card">
        <p>Hi! My name is William, I'm a Computer Science major from the University of the Pacific.  I love constantly learning new things and making stuff with my knowledge.  Currently, I love coding small projects with Python and creating web applications with React.</p>
        <p>In my free time I love powerlifting and playing video games.  I also enjoy hiking, but don't go as nearly as much as I would like.  I especially love visiting Yosemite.</p>
        <p><b>Favorite Album:</b> Pet Sounds - The Beach Boys</p>
        <p><b>Favorite Movies:</b> The Raid 2, Oppenheimer, Rush Hour 2</p>
        <p><b>Favorite TV Show:</b> Brooklyn Nine-Nine</p>
        <p><b>Favorite Game:</b> Fallout: New Vegas</p>
      </div>
    </>
  );
}