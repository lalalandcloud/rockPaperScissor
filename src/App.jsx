import { useState } from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'

function App() {

  const [score, setScore] = useState("0")


  return (
    <>
      <Header score={score}/>
      <Game/>
    </>
  )
}

export default App
