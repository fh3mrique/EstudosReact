import React, { useState } from 'react'

const  RenderizacaoCondicional = () => {

    const [x] = useState(false)
    const [nome] = useState("Filipe")

  return (
    <div>
        <h2>RenderizacaoCondicional</h2>
        <h3>diferentes estados da variavel x iram resulatr em renderizações de paragrafos diferentes abaixo</h3>
        {x && <p>A VARIAVEL X É VERDADEIRA</p>}
        {!x && <p>A VARIAVEL X É FALSA</p>}

        <h3>if ternário</h3>
        {nome == "Filipe" ? (
        <div>
            <p>O nome é Filipe</p>
        </div>
        ) : (<div>
            <p>Nome não encontrado</p>
        </div>)}

    </div>
  )
}

export default RenderizacaoCondicional