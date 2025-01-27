import React from 'react';
import axios from 'axios';
import Tag from '../components/Tag.tsx';

function Lista (){

    const baseUrl:string = 'https://cataas.com/api/tags';
  
    const [lista, setLista] = React.useState<string[]>([]);

    const addItem = (item:string) => {
        setLista((prevList)=>([...prevList, item]));
    }

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
        response.data.map((item:string) => {
        addItem(item);
        })
        }).catch((error) => {
        console.error(error);
        }).finally(() => {
        console.log('Request completed');
        })
    }, [baseUrl]);


    return(
        <>
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-4 text-white text-center text-2xl">
                <p className="text-white">Lista de Gatos</p>
            </div>

            <div className='m-8' id='topo'>
                {
                    lista.map((item, index) => {
                        return <Tag key={index} title={item} />
                    })
                }
            </div>
        </>
    )
}

export default Lista