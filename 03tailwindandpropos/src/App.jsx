import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mycomponent from './components/mycomponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-xl font-bold underline">Hello world!</h1>
      <Mycomponent usesrname={"Aman"}/>
    </>
  );
}

export default App
