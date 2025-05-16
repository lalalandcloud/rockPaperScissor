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
            <div id='divGloBtn'>
                <div className='divBtnBrder paper'>
                    <div onClick={()=> onSelect('paper')} id='divBtnPaper' className='btn paperB'>
                        <img id='paper' src= {paper} alt="" />
                    </div>
                </div>
                <div className='divBtnBrder rock'>
                    <div onClick={()=> onSelect('rock')} id='divBtnRock' className='btn rockB'>
                        <img id='rock' src={rock} alt="" />
                    </div>
                </div>
                <div className='divBtnBrder scissor'>
                    <div onClick={()=> onSelect('scissor')} id='divBtnScissor' className='btn scissorB'>
                        <img id='scissor' src={scissor} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game