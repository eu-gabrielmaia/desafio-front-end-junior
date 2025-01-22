import React from 'react';
import axios from 'axios';
import CardItem from './CardItem.tsx';
import Lista from '../pages/Lista/Lista.tsx';

function Card() {

  

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            <CardItem texto='Teste'></CardItem>
        </ul>
      </div>
  )
}

export default Card
