import React, { useState } from 'react'

const  RenderizacaoCondicional = () => {

    const [x] = useState(false)
  return (
    <div>
        <h2>RenderizacaoCondicional</h2>
        <h3>diferentes estados da variavel x iram resulatr em renderizações de paragrafos diferentes abaixo</h3>
        {x && <p>A VARIAVEL X É VERDADEIRA</p>}
        {!x && <p>A VARIAVEL X É FALSA</p>}

    </div>
  )
}

export default RenderizacaoCondicional