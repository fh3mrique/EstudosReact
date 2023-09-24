
//imports css
import './App.css'
//imports react
import { useState, useEffect, useCallback } from 'react'
//imports dados
import{wordsList} from "./dados/Palavras"
//imports components
import TelaInicial from './components/TelaInicial'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id:1, nome: 'inicio'},
  {id:2, nome: 'game'},
  {id:3, nome: 'fim'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].nome);
  const [palavras] = useState(wordsList);

  //Função que inicia o game
  const iniciarGame = () =>{
    setGameStage(stages[1].nome)
  }

  //Função Processa o input da letra
  const verificaLetra = () =>{
    setGameStage(stages[2].nome)
  }

  //Função que reinicia o game
  const restartGame = () =>{
    setGameStage(stages[0].nome)
  }


  return (
    <div className='App'>
      {gameStage === 'inicio' && <TelaInicial iniciarGame = {iniciarGame}/>}
      {gameStage === 'game' && <Game verificaLetra = {verificaLetra}/>}
      {gameStage === 'fim' && <GameOver restartGame = {restartGame}/>}        
    </div>
  )
}

export default App
