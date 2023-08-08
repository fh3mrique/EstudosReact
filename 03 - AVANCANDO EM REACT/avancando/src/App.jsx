import "./App.css";

import kokouNoHitoImg from "./assets/kokou.jpg";
import Container from "./components/Container";
import DetalhesCarro from "./components/DetalhesCarro";
import ManipularDados from "./components/ManipularDados";
import MostrarNomeUsuario from "./components/MostrarNomeUsuario";
import RenderLista from "./components/RenderLista";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import SmathPhone from "./components/SmathPhone";

function App() {
  /*Essa é a representação de uma lista de dados vindos de uma API */
  const SmathPhonesLista = [
    { modelo: "IPHONE 14", marca: "APPLE", preco: 4000, novo: true },
    { modelo: "A52", marca: "SAMSUNG", preco: 1000, novo: true },
    { modelo: "REDMI 9", marca: "XAOMI", preco: 4000, novo: true },
    { modelo: "PIXEL 4", marca: "GOOGLE", preco: 4000, novo: true },
  ];

  return (
    <>
      <h1>Avançando em React</h1>
      {/* Imagens em public */}
      <div>
        <h5>Imagens em public</h5>
        <img src="/punpun.jpg" alt="" />
      </div>

      {/* Imagens Assets */}
      <div>
        <h5>imagens em assets</h5>
        <img src={kokouNoHitoImg} alt="" />
      </div>

      <ManipularDados />
      <RenderLista />
      <RenderizacaoCondicional />
      {/* Props */}
      <MostrarNomeUsuario nome="Filipe" />
      {/* Destructuring props */}
      <DetalhesCarro marca="Dodge ram" preco={100000.0} cor="Cinza" />
      {/* Reaproveitamento de componentes */}
      <DetalhesCarro
        marca="HB20"
        preco={100000.0}
        cor="PRETO"
        carrroNovo={false}
      />
      <DetalhesCarro
        marca="RENEGADE"
        preco={100000.0}
        cor="CINZA"
        carrroNovo={true}
      />
      <DetalhesCarro
        marca="POLO"
        preco={100000.0}
        cor="BRANCO"
        carroNovo={true}
      />
      {/* Renderização de lista em componente */}
      {SmathPhonesLista.map((smathPhone) => (
        <SmathPhone
          key={smathPhone.modelo}
          modelo={smathPhone.modelo}
          marca={smathPhone.marca}
          preco={smathPhone.preco}
          novo={smathPhone.novo}
        />
      ))}

      {/* Children prop */}
      <Container pc="Prop do componenete">
        <h2>Este é o conteudo</h2>
      </Container>
    </>
  );
}

export default App;
