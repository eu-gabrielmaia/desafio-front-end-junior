import './App.css';
import Ancora from './components/Ancora.tsx';
import Tag from './components/Tag.tsx';
import axios from 'axios';
import React from 'react';

function App() {

  const baseUrl:string = 'https://cataas.com/api/tags';
  
  const [lista, setLista] = React.useState<string[]>([]);

  const addItem = (item:string) => {
    setLista((prevList)=>([...prevList, item]));
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
     response.data.map((item:string) => {
      addItem(item);
     })
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Request completed');
    })
  }, [baseUrl]);

  return (
    <>
      <div className="sticky top-0 bg-black text-white py-4 w-full">
        <Ancora href='#topo' texto='Voltar'/>
        <Ancora href="Lista.tsx" texto="Lista de Gatos"/>
        <Ancora href="Formulario.tsx" texto="Formulário"/>
      </div>

      <div className='m-8' id='topo'>
        {
          lista.map((item, index) => {
            return <Tag key={index} title={item} />
          })
        }
      </div>
    </>
  )
}

export default App
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      