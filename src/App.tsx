import './App.css';
import Lista from './pages/Lista/Lista.tsx';
import Ancora from './components/Ancora.tsx';
import Formulario from './pages/Formulario.tsx';
import Tag from './components/Tag.tsx';
import axios from 'axios';
import React from 'react';

function App() {

  const baseUrl = 'https://cataas.com/api/tags';

  const [itemPost, setItemPost] = React.useState<string>('');
  const [lista, setLista] = React.useState<string[]>([]);

  const addItem = (item:string) => {
    setLista((prevList)=>([...prevList, item]));
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
     response.data.map((item:string) => {
      addItem(item);
      console.log("Oi eu sou o:", item);
     })
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Request completed');
    })
  }, [baseUrl]);

  console.log(lista);

  return (
    <>
      <div className="bg-black text-white py-4">
        <Ancora href="Lista.tsx" texto="Lista de Gatos"/>
        <Ancora href="Formulario.tsx" texto="Formulário"/>
      </div>

      <div className='m-8'>
        {
          lista.map((item, index) => {
            return <Tag key={index} title={item} />
          })
        }
      </div>
      <Tag title="Tag1"/>
      <Tag title="Tag2"/>
    </>
  )
}

export default App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      