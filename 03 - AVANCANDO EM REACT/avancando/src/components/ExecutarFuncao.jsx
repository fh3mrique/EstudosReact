import React from 'react'

const ExecutarFuncao = ({myFunction}) => {
  return (
    <div>
        <button onClick={myFunction}>Clique em mim para executar a função no console</button>
    </div>
  )
}

export default ExecutarFuncao