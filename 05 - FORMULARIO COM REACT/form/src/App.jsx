import { useState } from 'react'

import './App.css'
import MeuForm from './components/MeuForm'

function App() {


  return (
    <>
      <h1>Formulário com React</h1>
      <MeuForm usuario = {{nome: "Naruto", email: "naruto@gmail.com", cargo:"admin"}}/>
    </>
  )
}

export default App
