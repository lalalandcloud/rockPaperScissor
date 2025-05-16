import { useState } from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'
import Vs from './components/vs/vs'

function App() {

  const [step, setStep] = useState("game")
  const [score, setScore] = useState("0")
  const [select, setSelect] = useState(null)
  const [choice, setChoice] = useState(null)

  const handle = (element) => {
    setSelect(element); 
    randomChoice()
  };
  
  const randomChoice = () =>{
    const choices =["paper", "rock", "scissor"];
    const random = choices[Math.floor(Math.random() * setChoice.length)]
    setChoice(random)
  }

  return (
    <>
      <Header score={score} />
  
      {!select ? (
        <Game onSelect={handle} />
      ) : (
        <Vs id={select} randomId={choice}
        
        />
      )

      }
    </>
  );
  
}

export default App
