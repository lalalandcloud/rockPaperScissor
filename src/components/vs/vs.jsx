import './vs.css'
import imgPaper from '../../assets/images/icon-paper.svg'
import imgRock from '../../assets/images/icon-rock.svg'
import imgScissor from '../../assets/images/icon-scissors.svg'

const images ={
    paper: imgPaper,
    rock: imgRock,
    scissor: imgScissor
}

function Vs ({id , randomId}) {
    

    return(
        <div id='divGloVs'>
            <div className={`divBtnBrder ${id}`}>
                <div className={`btn ${id}B`}>
                    <img src={images[id]} alt="" />
                </div>
            </div>
            <div className={`divBtnBrder ${randomId}`}>
                <div className={`btn ${randomId}B`}>
                    <img src={images[randomId]} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Vs