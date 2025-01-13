import './App.css'
import { Link } from "react-router";

export default function ButtonList(){
  return(
    <>
      <div className = "buttons">
        <Link to="/"><MyButton text="Home"/></Link>
        <Link to="/about"><MyButton text="About"/></Link>
        <Link to="/projects"><MyButton text="Projects"/></Link>
        <a href="https://www.linkedin.com/in/william-balbuena/" target="_blank" ><MyButton text="LinkedIn"/></a>
      </div>
    </>
  );
}

function MyButton({text}){
  return(
    <>
      <button>
        {text}
      </button>
    </>
  );
}