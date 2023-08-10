import React from 'react'

import "./MeuForm.css"

const MeuForm = () => {
  return (
    <div>
        {/* Criação de formúlario */}
        <form>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name='nome' placeholder='Digite seu nome' />
            </div>

            {/* Label envolvendo e-mail */}
            <label>
                <span>E-mail</span>
                <input type="text" name='email' placeholder='Digite seu email' />
            </label>

            <input type="submit" value= "enviar" />
        </form>
    </div>
  )
}

export default MeuForm