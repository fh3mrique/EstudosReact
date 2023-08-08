import React from 'react'

const  DetalhesCarro = ({marca, preco, cor}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {marca}</li>
            <li>Preço: {preco} </li>
            <li>Cor: {cor} </li>
        </ul>
    </div>
  )
}

export default DetalhesCarro