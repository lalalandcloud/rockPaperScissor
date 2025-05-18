import './header.css'

function Header(props) {

    return(
        <div id='divG'>
            <div id='divTitre'>
                <h1>ROCK</h1>
                <h1>PAPER</h1>
                <h1>SCISSOR</h1>
            </div>
            <div id='divScore'>
                <h4>Score</h4>
                <h1>{props.score}</h1>
            </div>
        </div>
    )
}

export default Header