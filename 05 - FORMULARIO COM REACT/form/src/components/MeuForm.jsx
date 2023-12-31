import React, { useState } from 'react'

import "./MeuForm.css"

const MeuForm = ({usuario}) => {

    const [nome, setNome] = useState( usuario ? usuario.nome : "") 
    const [email, setEmail] = useState(usuario ? usuario.email : "")

    const [bio, setBio] = useState("")

    const [cargo, setCargo] = useState(usuario ? usuario.cargo : "");

    function handleName(e){
        setNome(e.target.value)
    }

    /* console.log(nome)
    console.log(email) */

    function handleSubmit (evento){
        /*event.preventDefault() é um método do JavaScript usado na web para evitar que o 
        navegador siga o comportamento padrão associado a um evento em um elemento HTML. 
        Isso dá aos desenvolvedores o controle sobre o que acontece quando ocorre um evento,
        permitindo personalizar as ações em vez de seguir as ações padrão do navegador. */
        evento.preventDefault()
        console.log("Enviando formulário")
        console.log(nome, email, bio, cargo)

        setNome("");
        setEmail("")
    }

  return (
    <div>
        {/* 4 - Envio de form */}
        {/* 1- Criação de formúlario */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome: </label>
                <input type="text" name='nome' placeholder='Digite seu nome' onChange={handleName}  value={nome}/>
            </div>

            {/* 2 - Label envolvendo input */}
            <label>
                <span>E-mail</span>
                {/* 3 - Simplificando com evento com função inline */}
                <input type="text" name='email' placeholder='Digite seu email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </label>


            {/* TEXTAREA */}
            <label>
                <span>bio</span>
                <textarea name="bio" placeholder='descreva sua situação' value={bio} onChange={(e) => setBio(e.target.value)}></textarea>
            </label>

            {/* INPUT SELECT */}
            <label>
                <span>Cargo</span>
                <select name="cargo" onChange={(e) => setCargo(e.target.value)} value={cargo}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </label>

            <input type="submit" value= "enviar" />
        </form>
    </div>
  )
}

export default MeuForm