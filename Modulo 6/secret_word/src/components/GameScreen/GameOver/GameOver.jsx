import './GameOver.css'

export const GameOver = ({ retry, score }) => {
    return (
        <div>
            <h1>Fim do jogo!</h1>
            <h2>Sua pontuação foi: <span>{score}</span></h2>
            <button onClick={retry}>Recomeçar o jogo</button>
        </div>
    )
}
