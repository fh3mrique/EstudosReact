import React from 'react'

const Eventos = () => {

    /*No parâmetro de uma função evento temos acesso ao evento e todos os seus métodos */
    const handleMeuEvento = (evento) =>{
        console.log(evento);

        console.log("Ativou o evento!!!")
    }


  return (
    <div>
        <div>
            <p>Clique em mim para disparar um evento no console</p>
            <button onClick={handleMeuEvento}>CLICK</button>
        </div>
    </div>
  )
}

export default Eventos