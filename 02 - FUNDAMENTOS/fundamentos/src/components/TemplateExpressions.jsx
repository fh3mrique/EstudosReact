import React from 'react'

 const TemplateExpressions = () => {

    const objPessoa = {
        nome: "Filipe",
        profissao: "programador",
        anosTrabalhados: 34
    }

  return (
    <div>
        <h3>"olá meu nome é {objPessoa.nome} e tenho {objPessoa.anosTrabalhados} anos atuando como {objPessoa.profissao}"</h3>
    </div>
  )
}

export default TemplateExpressions