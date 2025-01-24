import React from 'react';
import axios from 'axios';
import CardItem from './CardItem.tsx';

function Card(props: {tags: string}) {

  const [itens, setItens] = React.useState<JSX.Element[]>([]);
  const baseUrl:string = 'https://cataas.com/api/cats';

  const acrecentaCardItem = (texto:string) => {
    return <CardItem texto={texto}/>
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log("Nova requisicao")
      const listaItens:JSX.Element[] = [];
     for (let i = 0; i < response.data.length; i++) {
      response.data[i].tags.map((item:string) => {
        if (item == props.tags){
          console.log("Tag encontrada", item);
          console.log("ID: ",response.data[i]._id);
          listaItens.push(acrecentaCardItem(response.data[i]._id));
        }
        console.log("---------------");
       })
     }
     setItens(listaItens);
    }).catch((error) => {
      console.error(error);
    }).finally(() => {
      console.log('Request completed');
    })
  }, [baseUrl]);

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            <CardItem texto='Teste'></CardItem>
            {itens}
        </ul>
      </div>
  )
}

export default Card
