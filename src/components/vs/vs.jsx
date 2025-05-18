import './vs.css'
import imgPaper from '../../assets/images/icon-paper.svg'
import imgRock from '../../assets/images/icon-rock.svg'
import imgScissor from '../../assets/images/icon-scissors.svg'

const images ={
    paper: imgPaper,
    rock: imgRock,
    scissor: imgScissor
}

function Vs ({id , randomId, result, onReplay}) {
    
    // const [step, setStep] = useState(0);
    
    // if (step === 0){
    //     setTimeout(() => setStep(1), 100)
    //     setTimeout(() => setStep(2), 1100)
    //     setTimeout(() => setStep(3), 2100)
    // }



    return(
        <div id='divGloVs' className='vs-container'>
            {/* {step >= 1 &&( */}

                <div id='divYou'>
                    <div>
                        <h4>YOU PICKED</h4>
                    </div>
                    <div className={`divBtnBrder ${id}`}>
                        <div className={`btn ${id}B`}>
                            <img src={images[id]} alt="" />
                        </div>
                    </div>
                </div>
            {/* )} */}
                <div id='divRes'>
                    <h1 className='resultat'>{result}</h1>
                    <button onClick={onReplay} id='btnRes'>PLAY AGAIN</button>
                </div>

            {/* {step >= 2 && ( */}
                <div id='divHouse'>
                    <div>
                        <h4>THE HOUSE PICKED</h4>
                    </div>
                    <div className={`divBtnBrder ${randomId}`}>
                        <div className={`btn ${randomId}B`}>
                            <img src={images[randomId]} alt="" />
                        </div>
                    </div>
                </div>
            {/* )} */}
            {/* {step >= 3 &&( */}
            {/* )} */}

        </div>

    )
}

export default Vs