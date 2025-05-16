import { useState } from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'
import Vs from './components/vs/vs'

function App() {

  // const [step, setStep] = useState("game")
  const [score, setScore] = useState(0)
  const [select, setSelect] = useState(null)
  const [choice, setChoice] = useState(null)

  const handle = (element) => {
    const pcChoice = randomChoice()
    setSelect(element);
    setChoice(pcChoice)
    incrementation(element, pcChoice)
  };

  
  const getResult = (player, pc) => {
    if (player === pc) return "DRAW";
    if (
      (player === "rock" && pc === "scissor") ||
      (player === "scissor" && pc === "paper") ||
      (player === "paper" && pc === "rock")
    ) {
      return "YOU WON";
    }
    return "YOU LOSE";
  }

  const incrementation = (player, pc) => {
    const result = getResult (player, pc)
    if (result === "YOU WON"){
      return setScore(prev => prev+1)
    }
    else if (result === "YOU LOSE"){
      return setScore(prev => prev-1)
    }
  }
  

  const randomChoice = () => {
    const choices =["paper", "rock", "scissor"];
    return choices[Math.floor(Math.random() * choices.length)];
  }

  return (
    <>
      <Header score={score} />
  
      {!select ? (
        <Game onSelect={handle} />
      ) : (
        <Vs 
          id={select} 
          randomId={choice}
          result={getResult(select, choice)}
          // onReplay={reset}
        />
      )

      }
    </>
  )}
  


export default App
