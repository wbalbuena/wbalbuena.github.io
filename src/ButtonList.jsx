import './App.css'
import { Link } from "react-router";

export default function ButtonList(){
  return(
    <>
      <div className = "buttons">
        <Link to="/"><MyButton text="HOME"/></Link>
        <a href="https://www.linkedin.com/in/william-balbuena/" target="_blank" ><MyButton text="LINKEDIN"/></a>
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