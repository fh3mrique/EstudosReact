import React from 'react'
import "./TelaInicial.css"

const TelaInicial = ({iniciarGame}) => {
  return (
    <div className='start'>
        <h1>Secret Word</h1>
        <p>Clique no botão para começar a jogar</p>
        <button onClick={iniciarGame}>Começar a jogo</button>
    </div>
  )
}

export default TelaInicial