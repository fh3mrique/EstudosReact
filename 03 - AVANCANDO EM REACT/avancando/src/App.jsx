
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
    </>
  )
}

export default App
