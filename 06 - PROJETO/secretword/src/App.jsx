
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

  console.log(palavras)

  return (
    <div className='App'>
      {gameStage === 'inicio' && <TelaInicial/>}
      {gameStage === 'game' && <Game/>}
      {gameStage === 'fim' && <GameOver/>}        
    </div>
  )
}

export default App
