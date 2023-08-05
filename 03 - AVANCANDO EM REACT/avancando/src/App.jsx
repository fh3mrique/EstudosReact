
import './App.css'

import kokouNoHitoImg from "./assets/kokou.jpg"
import ManipularDados from './components/ManipularDados'
import RenderLista from './components/RenderLista'

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
    </>
  )
}

export default App
