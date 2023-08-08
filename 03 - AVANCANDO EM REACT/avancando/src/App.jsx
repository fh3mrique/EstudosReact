
import './App.css'

import kokouNoHitoImg from "./assets/kokou.jpg"
import DetalhesCarro from './components/DetalhesCarro'
import ManipularDados from './components/ManipularDados'
import MostrarNomeUsuario from './components/MostrarNomeUsuario'
import RenderLista from './components/RenderLista'
import RenderizacaoCondicional from './components/RenderizacaoCondicional'

function App() {
 
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

      <ManipularDados/>
      <RenderLista/>
      <RenderizacaoCondicional/>
      {/* Props */}
      <MostrarNomeUsuario nome = "Filipe"/>
      {/* Destructuring props */}
      <DetalhesCarro marca = "Dodge ram" preco = {100000.00} cor = "Cinza"/>
      {/* Reaproveitamento de componentes */}
      <DetalhesCarro marca = "HB20" preco = {100000.00} cor = "PRETO" carrroNovo = {false}/>
      <DetalhesCarro marca = "RENEGADE" preco = {100000.00} cor = "CINZA" carrroNovo = {true}/>
      <DetalhesCarro marca = "POLO" preco = {100000.00} cor = "BRANCO" carroNovo = {true}/>
    </>
  )
}

export default App
