import React from 'react'

const  SmathPhone = ({modelo, marca, preco, novo}) => {
  return (
    <div>
        <h2>Detalhes do {modelo}</h2>
        <ul>
            <li>Modelo: {modelo}</li>
            <li>Marca: {marca}</li>
            <li>Preço: {preco}</li>
            <li>Status: {novo? ("Produto novo"): ("Produto Usado")}</li>
        </ul>
    </div>
  )
}

export default SmathPhone