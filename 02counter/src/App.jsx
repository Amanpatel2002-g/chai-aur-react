import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const increaseValue = ()=>{
    console.log("value from the increaseValue is: "+Math.random());
    counter = counter+1
    const element = document.getElementById('counterField')
    element.textContent = `value of the counter is: ${counter}`
  }

  let counter = 5;
  return (
    <>
      <h1>This is the counter application</h1>
      <h2 id='counterField'>Value of the counter:{counter}</h2>
      <button onClick={increaseValue}>Increase</button>
      <br />
      <button>Decrease</button>
    </>
  )
}

export default App
