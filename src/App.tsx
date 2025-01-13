import './App.css';
import Lista from './pages/Lista/Lista.tsx';
import Ancora from './components/Ancora.tsx';
import Formulario from './pages/Formulario.tsx';
import Tag from './components/Tag.tsx';

function App() {

  return (
    <>
      <div className="bg-black text-white py-4">
        <Ancora href="Lista.tsx" texto="Lista de Gatos"/>
        <Ancora href="Formulario.tsx" texto="Formulário"/>
      </div>

      <Tag title="Tag1"/>
      <Tag title="Tag2"/>
    </>
  )
}

export default App
