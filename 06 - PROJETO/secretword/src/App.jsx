
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

  const [palavraSelecionada, setPalavraSelecionada] = useState("");
  const [categoriaSelecionada, setCategoriaSelecionada] = useState("");
  
  const [letras, setLetras] = useState([]);

  //Função que inicia o game
  const iniciarGame = () =>{
   //pegando uma palavra e categoria 
   const {palavra, categoria} = SelecionarPalavraECategoria();

   //separando a palavra string em array com letras
   let palavraLetras = palavra.split("");
   palavraLetras = palavraLetras.map((letra) => letra.toLowerCase());
   

   console.log(palavra, categoria);
   console.log(palavraLetras);

   //Preenchendo states
   setPalavraSelecionada(palavra);
   setCategoriaSelecionada(categoria);
   setLetras(letras)

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

  //Função que escolher uma categória e palavra aleatoria
  const SelecionarPalavraECategoria = () =>{

    //Pegando uma categoria aleatória
    const categorias = Object.keys(palavras);
    const categoria = 
    categorias[Math.floor(Math.random() * Object.keys(categorias).length)]

    console.log(categoria);

    //pegando uma palavra aleatória
    const palavra = 
    palavras[categoria][Math.floor(Math.random() * palavras[categoria].length)]

    console.log(palavra)

    //Agora podemos desestruturar
    return {palavra, categoria}
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
