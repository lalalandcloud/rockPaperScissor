import './game.css'
import scissor from '../../assets/images/icon-scissors.svg'
import paper from '../../assets/images/icon-paper.svg'
import rock from '../../assets/images/icon-rock.svg'
import background from '../../assets/images/bg-triangle.svg'

function Game(){
    return(
        <div style={{ backgroundImage: `url(${background})` }}>
            <div id='divBtnPaper'>
                <img id='imgPaper' src= {paper} alt="" />
            </div>
            <div id='divBtnScissor'>
                <img src={scissor} alt="" />
            </div>
            <div id='divBtnRock'>
                <img src={rock} alt="" />
            </div>
        </div>
    )
}

export default Game