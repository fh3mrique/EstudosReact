import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MeuComponente from './components/MeuComponente'

function App() {


  return (
    <>
      <h1>React com CSS</h1>

      {/* Css de componente */}
      <MeuComponente/>

      <p>paragráfo do App.js</p>
    </>
  )
}

export default App
