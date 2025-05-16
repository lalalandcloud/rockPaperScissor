import { useState } from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'
import Vs from './components/vs/vs'

function App() {

  const [step, setStep] = useState("game")
  const [score, setScore] = useState("0")
  const [select, setSelect] = useState(null)

  const handle = (element) => {
    setSelect(element); 
  };
  
  return (
    <>
      <Header score={score} />
  
      {!select ? (
        <Game onSelect={setSelect} />
      ) : (
        <Vs id={select}/>
      )}
    </>
  );
  
}

export default App
