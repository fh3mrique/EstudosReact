import { useState, useRef } from "react"
import "./Game.css"

const Game = ({
  verificaLetra, 
  palavraSelecionada, 
  categoriaSelecionada, 
  letras,
  letrasTentativas,
  letrasErradas,
  tentativas,
  score
 }) =>  {
  const [letra, setLetra] = useState("");
  const letraInputRef = useRef(null)
  
  const handleSubmit = (e) =>{
    e.preventDefault()

    verificaLetra(letra)

    setLetra("")

    letraInputRef.current.focus();
  }

  return (

    <div className="game">
      <p className="pontos">
        <span>Pontução: {score}</span>
      </p>
      <h1>Adivinhe a palavra:</h1>
      <h2 className="dica">
        Dica sobre a palavra: <span>{categoriaSelecionada}</span>
      </h2>
      <p>Você ainda tem {tentativas} tentativas</p>
      <div className="palavraContainer">
        {letras.map((letra, index) => 
          letrasTentativas.includes(letra) ? (
            <span key={index} className="letra">
              {letra}
            </span>
          ) : (
            <span key={index} className="blankSquare">

            </span>
          )
        )}
      </div>
      <div className="letraContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input type="text" 
          name="letra" 
          maxLength="1" 
          required 
          onChange={(e) => setLetra(e.target.value)}
          value={letra} 
          ref={letraInputRef}/>
          <button>Jogar!</button>
        </form>
      </div>
      <div className="letrasErradasContainer">
        <p>Letras já utilizadas</p>
        {letrasErradas.map((letra, index) => {
          <span key={index}>{letra}</span>
        })}
      </div>
    </div>
  )
}

export default Game