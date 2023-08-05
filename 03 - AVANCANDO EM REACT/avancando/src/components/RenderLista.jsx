import React, { useState } from 'react'

function RenderLista() {
 const [listaNome] = useState(["Naruto", ["Sasuke"], ["Sakura"]]);

 const [usuarios, setUsuarios] = useState([
    {id: 1, nome: "Nome 1", idade: 43},
    {id: 2, nome: "Nome 2", idade: 23},
    {id: 3, nome: "Nome 3", idade: 42},
 ])

 const deleteRandom = () =>{
    /*Math.random(): Math.random() é uma função da biblioteca JavaScript que retorna um número 
    decimal aleatório no intervalo [0, 1). Isso significa que o valor retornado pode ser 0 (incluído) 
    ou qualquer número menor que 1 (não incluído). 
    
    Math.random() * 3: Ao multiplicar o resultado de Math.random() por 3, obtemos um novo número 
    decimal aleatório no intervalo [0, 3). O número retornado pode ser 0 (incluído) ou qualquer 
    número menor que 3 (não incluído).

    Math.floor(...): A função Math.floor() arredonda o número decimal para o número inteiro mais 
    próximo que é menor ou igual ao número decimal fornecido como argumento. Isso significa que, 
    após Math.floor(), o resultado será um número inteiro no intervalo [0, 2].
    */
     const numeroAleatorio = Math.floor(Math.random() * 4)

     setUsuarios((prevUsuarios) =>{
        return prevUsuarios.filter((user) => numeroAleatorio !== user.id)
     })
 }

  return (
    <div>
        <h2>Renderização de lista</h2>
        <div>
            <ul>
                {listaNome.map(
                    (itens, index) => (
                        <li key={index}>{itens}</li>
                    )
                )}
            </ul>

            <ul>
                {
                    usuarios.map((obj) =>(
                        <li key={obj.id}>{obj.nome} - {obj.idade}</li>
                    ))
                }
            </ul>
            <button onClick={deleteRandom}>Deletar usuario aleatório</button>
        </div>
    </div>
  
  )
}

export default RenderLista