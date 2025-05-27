import './GameOver.css' 

const GameOver = ({retry}) => {
  return (
    <>
    <div>GameOver</div>
    <button onClick={retry}>Tentar de novo</button>
    </>
   
  )
}

export default GameOver