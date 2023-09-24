import "./Game.css"

const Game = ({verificaLetra}) =>  {
  return (
    <div className="game">
      <p className="pontos">
        <span>Pontução: 000</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h2 className="dica">
        Dica sobre a palavra: <span>Dica ...</span>
      </h2>
      <div className="palavraContainer">
        <span className="letra">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letraContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letra" maxLength="1" required />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas</p>
        <span>a</span>
        <span>b</span>
      </div>
    </div>
  )
}

export default Game