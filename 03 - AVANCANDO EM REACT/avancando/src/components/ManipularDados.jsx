import React, { useState } from 'react';

const ManipularDados = () => {
  // Inicialize o estado usando o useState
  const [numeroMutavel, setNumeroMutavel] = useState(10);

  let numero = 10;

  return (
    <div>
      <div>
        <p>SEM HOOK USESTATE</p>
        <p>VALOR: {numero}</p>
        {/* Para atualizar o valor da variável 'numero', você precisa usar 'setNumero(numero + 10)' */}
        <button onClick={() => setNumero(numero + 10)}>+ 10</button>
      </div>

      <div>
        <p>COM HOOK USESTATE</p>
        <p>VALOR: {numeroMutavel}</p>
        {/* Para atualizar o valor de 'numeroMutavel', você precisa usar 'setNumeroMutavel(numeroMutavel + 10)' */}
        <button onClick={() => setNumeroMutavel(numeroMutavel + 10)}>+ 10</button>
        <button onClick={() => setNumeroMutavel(numeroMutavel - 10)}>- 10</button>
      </div>
    </div>
  );
};

export default ManipularDados;
