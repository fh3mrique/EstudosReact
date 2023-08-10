import React, { useState } from 'react'

import "./MeuForm.css"

const MeuForm = () => {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    function handleName(e){
        setNome(e.target.value)
    }

    console.log(nome)
    console.log(email)
  return (
    <div>
        {/* Criação de formúlario */}
        <form>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleName} />
            </div>

            {/* Label envolvendo e-mail */}
            <label>
                <span>E-mail</span>
                <input type="text" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)}/>
            </label>

            <input type="submit" value= "enviar" />
        </form>
    </div>
  )
}

export default MeuForm