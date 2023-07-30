import React from 'react'
import Reaproveitavel from './Reaproveitavel'


//Componente react
const PrimeiroComponente  = () => {
  return (
    <div>
        <h1>Meu primeiro componente</h1>
        {/* Diferente do HTML o JSX não usa a palavra class e sim className */}
        <p className='jsx'>JFX</p>
        <Reaproveitavel/>
    </div>
  )
}

export default PrimeiroComponente