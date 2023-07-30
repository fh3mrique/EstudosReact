import React from 'react'


//Componente react
const PrimeiroComponente  = () => {
  return (
    <div>
        <h1>Meu primeiro componente</h1>
        {/* Diferente do HTML o JSX não usa a palavra class e sim className */}
        <p className='jsx'>JFX</p>
    </div>
  )
}

export default PrimeiroComponente