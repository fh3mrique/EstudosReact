import React from 'react'

const MudaMensagewmState = ({handleMessage}) => {

    const messagens = ["Olá", "Oi tudo bom", "Hello"]
  return (
    <div>
        <button onClick={()=>handleMessage(messagens[0])}>1</button>
        <button onClick={()=>handleMessage(messagens[1])}>2</button>
        <button onClick={()=>handleMessage(messagens[2])}>3</button>
    </div>
  )
}

export default MudaMensagewmState