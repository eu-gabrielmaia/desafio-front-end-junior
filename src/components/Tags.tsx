import React from 'react';
import Card from './Card.tsx';
import CardItem from './CardItem.tsx';
import { useState } from 'react';

function Tags() {

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    if(isHidden){
      setIsHidden(false);
    } else{
      setIsHidden(true);
    }
  };

  function showCard() {
    if (isHidden) {
      return (
        <Card/>
      )
    }
  }

  return (
    <>
    <div className='p-4'>
      <div className="tags bg-white flex items-center">
        <span className="material-symbols-outlined p-2">arrow_forward_ios</span>
        <div className='font-bold' onClick={handleClick}>
          <p className='text-2xl'>Tag</p>
        </div>
      </div>
      {showCard()}
    </div>
    </>
  )
}

export default Tags
