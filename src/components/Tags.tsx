import React from 'react'
import Card from './Card.tsx'

function Tags() {

  const handclick = () => {
    alert('Clicou')
  }

  return (
    <>
      <div className="tags bg-white flex items-center">
        <span className="material-symbols-outlined p-4">arrow_forward_ios</span>
        <div className='font-bold' onClick={handclick}>
          <p className='text-2xl'>Tag</p>
        </div>
      </div>
      <Card></Card>
    </>
  )
}

export default Tags
