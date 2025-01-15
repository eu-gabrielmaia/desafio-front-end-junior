import React from 'react';

function Ancora(props: {href: string, texto: string}) {

  return (
    <>
        <a href={props.href} className="font-bold bg-red px-8 py-2 border rounded-sm ms-8 hover:bg-sky-700">{props.texto}</a>
    </>
  )
}

export default Ancora
