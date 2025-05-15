import './game.css'
import scissor from '../../assets/images/icon-scissors.svg'
import paper from '../../assets/images/icon-paper.svg'
import rock from '../../assets/images/icon-rock.svg'
import { useState } from 'react'

function Game(props){

    return(
        <div id='divGloGame'>
            <div id='divBtnPaper'>
                <img id='paper' src= {paper} alt="" />
            </div>
            <div id='divBtnRock'>
                <img id='rock' src={rock} alt="" />
            </div>
            <div id='divBtnScissor'>
                <img id='scissor' src={scissor} alt="" />
            </div>
        </div>
    )
}

export default Game