import React from 'react'

const MeuForm = () => {
  return (
    <div>
        {/* Criação de formúlario */}
        <form>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name='nome' placeholder='Digite seu nome' />
            </div>

            <input type="submit" value= "enviar" />
        </form>
    </div>
  )
}

export default MeuForm