import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonList from './ButtonList.jsx'

export default function App() {
  return (
    <>
      <h1>WILLIAM BALBUENA</h1>
      <ButtonList />
      <div className="card">
        <b>Experience:</b><ul><li>ASIC Characterization Junior Engineer @ Micron Technology</li><li>IT General Helper @ San Joaquin Delta College, IT Department</li></ul>
        <b>Awards:</b><ul><li>Valedictorian @ University of the Pacific</li><li>1st @ 2021 H2O Hacakthon</li></ul>
        <p><b>Languages</b>: Python, C++, Java, SQL, HTML, CSS, JavaScript</p>
        <p><b>Technologies</b>: Flask, React, Selenium</p>
        <p><b>Other Skills</b>: 104 WPM certified typing speed, 100+ Leetcode problems solved</p>
      </div>
      <a href="https://www.linkedin.com/in/william-balbuena/" target="_blank"><p>For more information, connect with me on LinkedIn!</p></a>
    </>
  );
}