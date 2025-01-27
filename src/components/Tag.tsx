import Card from './Card.tsx';
import { useState } from 'react';

function Tag(props: {title: string}) {

  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    if(isHidden === true){
      setIsHidden(false);
    } else{
      setIsHidden(true);
    }
  };

  function showCard(titulo:string) {
    if (isHidden) {
      return (
        <Card tags={titulo}/>
      )
    }
  }

  return (
    <>
    <div className='m-4 p-4 border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 hover:shadow-lg hover:border-gray-400 hover:cursor-pointer' onClick={handleClick}>
      <div className="tags flex items-center">
        <span className="material-symbols-outlined p-2">arrow_forward_ios</span>
        <div className='font-bold'>
          <p className='text-base'>{props.title}</p>
        </div>
      </div>
      {showCard(props.title)}
    </div>
    </>
  )
}

export default Tag
