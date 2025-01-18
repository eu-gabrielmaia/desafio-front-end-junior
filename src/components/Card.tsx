import React from 'react';
import axios from 'axios';
import CardItem from './CardItem.tsx';
import Lista from '../pages/Lista/Lista.tsx';

function Card() {

  const baseUrl = 'https://cataas.com/api/cats';

  const [itemPost, setItemPost] = React.useState<string>('');
  const [lista, setLista] = React.useState<string[]>([]);

  const addItem = (item:string) => {
    const novoItem = item;
    setLista([...lista, novoItem]);
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setItemPost(response.data[0]._id);
      lista.push(itemPost);
      addItem(itemPost);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Request completed');
    })
  }, [baseUrl]);

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            {
              lista.map((item) => {
              return <CardItem texto={item} />
            })
            }
            <CardItem texto='Teste'></CardItem>
        </ul>
      </div>
  )
}

export default Card
