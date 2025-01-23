import React from 'react';

function Ancora(props: {href: string, texto: string}) {

  return (
    <>
        <a href={props.href} className="bg-red px-8 py-2 border rounded-sm ms-8 hover:bg-sky-700 hover:shadow-xl hover:border-sky-400 hover:cursor-pointer">{props.texto}</a>
    </>
  )
}

export default Ancora
