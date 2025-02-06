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
      const listaItens:JSX.Element[] = [];
      for (let i = 0; i < response.data.length; i++) {
        response.data[i].tags.map((item:string) => {
          if (item == props.tags){
            listaItens.push(acrecentaCardItem(response.data[i]._id));
          }
        })
      }
      if (listaItens.length == 0){
        listaItens.push(acrecentaCardItem("Nenhum item encontrado"));
      }
     setItens(listaItens);
    }).catch((error) => {
      console.error(error);
    })
  }, [baseUrl]);

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            {
              itens.map((item) => {
                return item;
              })
            }
        </ul>
      </div>
  )
}

export default Card
