import { useState, useEffect } from "react";

import "./App.css";

//URL onde está rodando os recursos da api
const url = "http://localhost:3000/products";

function App() {
  //Local onde os dados do recursos serão armazenados
  const [produtos, setProdutos] = useState([]);

  //1 - Resgatando dados do recurso
  useEffect(() => {
    async function fetchDados() {
      const resposta = await fetch(url); //dados vem em json

      // Aguarde a resolução da Promise do json()
      const dados = await resposta.json();

      setProdutos(dados);
    }

    fetchDados()
  }, []);

  console.log(produtos);

  return (
    <>
      <h1>Api lista de produtos</h1>
      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.name} - {produto.price}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
