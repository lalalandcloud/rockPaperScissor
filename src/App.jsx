import { use, useState } from 'react'
import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'
import Vs from './components/vs/vs'
import Modal from './components/modal/modal'

function App() {

  // const [step, setStep] = useState("game")
  const [score, setScore] = useState(0)
  const [select, setSelect] = useState(null)
  const [choice, setChoice] = useState(null)
  const [stage, setStage] = useState(0);
  const [result, setResult] = useState("")
  const [showRules, setShowRules] = useState(false)

  const handle = (element) => {
    const pcChoice = randomChoice()
    setSelect(element)
    setStage(1);

    setTimeout(() => {
      setChoice(pcChoice)
      setStage(2);

      setTimeout(() =>{
        const gameResult = getResult(element, pcChoice)
        setResult(getResult);
        setStage(3)
        incrementation(gameResult)
      }, 1000);
    }, 1000);
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


  


  const incrementation = (result) => {
    if (result === "YOU WON"){
      setScore(prev => prev + 1)
    } else if (result === "YOU LOSE"){
      return setScore(prev => prev-1)
    }
  };
  
  const replay = () => {
    setSelect(null)
    setChoice(null)
    setStage(0)
    setResult("")
  };

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
          randomId={stage >= 2 ? choice : null}
          result={stage >= 3 ? result : null}
          onReplay={replay}
        />
      )
      }
      <button id='btnRules' onClick={() => setShowRules(true)}>Rules</button>
      <Modal show={showRules} onClose={() => setShowRules(false)}>
      </Modal>

    </>
  )}
  


export default App
