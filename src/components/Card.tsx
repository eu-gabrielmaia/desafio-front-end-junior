import React from 'react';
import axios from 'axios';
import CardItem from './CardItem.tsx';
import Lista from '../pages/Lista/Lista.tsx';

function Card() {

  const baseUrl = 'https://cataas.com/api/cats';

  const [itemPost, setItemPost] = React.useState<string>('');
  const [lista, setLista] = React.useState<string[]>([]);

  const addItem = (item:string) => {
    setLista((prevList)=>([...prevList, item]));
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      for (let i = 0; i < response.data.length; i++) {
        const dado = response.data[i]._id;
        addItem(dado);
      }
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Request completed');
    })
  }, [baseUrl]);

  //exclui itens duplicado da lista da lista
  for(let i = lista.length; i > 10; i--){
    lista.pop()
  }

  console.log(lista);

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            {
              lista.map((item,index) => {
              return <CardItem key={index} texto={item} />
            })
            }
            <CardItem texto='Teste'></CardItem>
        </ul>
      </div>
  )
}

export default Card
