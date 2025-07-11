import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (

    <div>
      <h1>GameOver</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>

      </h2>
      <button onClick={retry}>Tentar de novo</button>
    </div>

  )
}

export default GameOver