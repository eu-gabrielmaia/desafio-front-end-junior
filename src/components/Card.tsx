import React from 'react';
import CardItem from './CardItem.tsx';

function Card() {

  return (
      <div>
        <ul className='px-8 my-2 list-inside list-disc'>
            <CardItem texto='Item 1'></CardItem>
            <CardItem texto='Item 2'></CardItem>
            <CardItem texto='Item 3'></CardItem>
            <CardItem texto='Item 10'></CardItem>
        </ul>
      </div>
  )
}

export default Card
