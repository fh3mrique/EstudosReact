import "./Game.css"

const Game = ({verificaLetra}) =>  {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={verificaLetra}>Começar a jogo</button>
    </div>
  )
}

export default Game