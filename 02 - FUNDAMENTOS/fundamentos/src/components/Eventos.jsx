import React from 'react'

const Eventos = () => {

    /*No parâmetro de uma função evento temos acesso ao evento e todos os seus métodos */
    const handleMeuEvento = (evento) =>{
        console.log(evento);

        console.log("Ativou o evento!!!")
    }

    const conteudoRenderizado = (x) =>{
        if (x == true){
           return <h3>REDERIZANDOE ESSE CONTEUDO SE A FUNÇÃO FOR CHAMADO COM TRUE COMO PARAMETRO</h3>
        }
        else{
            return <h3>REDERIZANDOE ESSE CONTEUDO SE A FUNÇÃO FOR CHAMADO COM FALSE COMO PARAMETRO</h3> 
        }
    }


  return (
    <div>
        <div>
            <p>Clique em mim para disparar um evento no console</p>
            <button onClick={handleMeuEvento}>CLICK</button>
        </div>
        <div>
            <button onClick={() => console.log("Funçao inline chamada")}>INLINE</button>
        </div>

        {conteudoRenderizado(true)}
        {conteudoRenderizado(false)}
    </div>
  )
}

export default Eventos