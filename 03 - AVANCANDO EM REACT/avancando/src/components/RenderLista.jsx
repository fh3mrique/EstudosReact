import React, { useState } from 'react'

function RenderLista() {
 const [listaNome] = useState(["Naruto", ["Sasuke"], ["Sakura"]]);

  return (
    <div>
        <h2>Renderização de lista</h2>
        <div>
            <ul>
                {listaNome.map(
                    (itens) => (
                        <li>{itens}</li>
                    )
                )}
            </ul>
        </div>
    </div>
  
  )
}

export default RenderLista