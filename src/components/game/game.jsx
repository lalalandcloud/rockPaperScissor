import './game.css'
import scissor from '../../assets/images/icon-scissors.svg'
import paper from '../../assets/images/icon-paper.svg'
import rock from '../../assets/images/icon-rock.svg'

const elements = [
    { id: 'paper', img: paper },
    { id: 'rock', img: rock },
    { id: 'scissor', img: scissor },
  ];

function Game({onSelect}){
      
    return(
        <div id='divGloGame'>
            <div onClick={()=> onSelect()} id='divBtnPaper'>
                <img id='paper' src= {paper} alt="" />
            </div>
            <div onClick={()=> onSelect('rock')} id='divBtnRock'>
                <img id='rock' src={rock} alt="" />
            </div>
            <div onClick={()=> onSelect('scissor')} id='divBtnScissor'>
                <img id='scissor' src={scissor} alt="" />
            </div>
        </div>
    )
}

export default Game