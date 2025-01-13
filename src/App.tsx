import './App.css';
import Lista from './pages/Lista/Lista.tsx';
import Ancoras from './components/Ancoras.tsx';
import Formulario from './pages/Formulario.tsx';
import Tags from './components/Tags.tsx';

function App() {

  return (
    <>
      <div className="bg-black text-white py-4">
        <Ancoras href="Lista.tsx" texto="Lista de Gatos"/>
        <Ancoras href="Formulario.tsx" texto="Formulário"/>
      </div>

      <Tags/>
    </>
  )
}

export default App
