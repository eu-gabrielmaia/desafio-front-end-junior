import React from 'react'

function CardItem(props: { texto: string}) {

  return (
    <>
        <div className="card">
            <li>{props.texto}</li>
        </div>
    </>
  )
}

export default CardItem
