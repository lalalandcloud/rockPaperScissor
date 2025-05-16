import './vs.css'
import imgPaper from '../../assets/images/icon-paper.svg'
import imgRock from '../../assets/images/icon-rock.svg'
import imgScissor from '../../assets/images/icon-scissor.svg'

const images ={
    paper: imgPaper,
    rock: imgRock,
    scissor: imgScissor
}

function Vs ({id}) {
    

    return(
        <div>
            <div className={`divBtnBrder ${id}`}>
                <div className={`btn ${id}B`}>
                    <img src={images[id]} alt="" />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Vs