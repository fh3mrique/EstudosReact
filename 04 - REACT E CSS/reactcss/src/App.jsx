import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuComponente from './components/MeuComponente'

function App() {

  const [condicional, setCondicional] = useState(true);
  function handleCondicional(){
       setCondicional(!condicional)
  }

  const vermelho = false;


  return (
    <>
      <h1>React com CSS</h1>

      {/* Css de componente */}
      <MeuComponente/>
      <p>paragráfo do App.js</p>

      {/* CSS Inline */}
      <p style={{color: "white", background: "black"}}> esse elemento foi estilizado de forma inline</p>
      
      {/* CSS Inline dinâmico */}
      <h2 style={condicional ? {color: "blue"}:{color: "pink"}}>CSS Inline dinâmico </h2>
      <button onClick={handleCondicional}>mudar Estado</button>

      {/* Classe dinâmica css */}
      <h2 className={vermelho? "classe-vermelha" : "classe-normal"}>Classe dinâmica css</h2>


    </>
  )
}

export default App
