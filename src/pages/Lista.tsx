import React from 'react';
import axios from 'axios';
import Tag from '../components/Tag.tsx';

function Lista (){
    
    const baseUrl:string = 'https://cataas.com/api/tags';
  
    const [listaTags, setLista] = React.useState<string[]>([]);
    const [listaFiltrada, setListaFiltrada] = React.useState<string[]>([]);

    const addItem = (item:string) => {
        setLista((prevList)=>([...prevList, item]));
    }

    function filtrarLista(evento: React.ChangeEvent<HTMLInputElement>){
        const value = evento.target.value.toLowerCase()
        console.log(value);
        if (value.trim() == '') {
            setLista(listaFiltrada);
        } else {
            const listaFiltrada1 = listaTags.filter(item => item.toLowerCase().includes(value));
            setLista(listaFiltrada1);
        }
    }

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            const tags = response.data;
            setLista(tags);
            setListaFiltrada(tags);
            }).catch((error) => {
            console.error(error);
            }).finally(() => {
            console.log('Requesição finalizada');
        })
    }, []);



    return(
        <> 
            <div className="bg-gradient-to-r from-indigo-700 to-indigo-500 p-4 text-white text-center text-2xl">
                <p className="text-white font-bold uppercase">Lista de Gatos</p>
            </div>

            <div>
                <p className="text-center text-xl mt-4">Aqui você encontra uma lista de tags de gatos</p>
            </div>

            <div className='m-8' id='topo'>
                <div>
                    <p>Pesquise por uma tag:</p>
                    <input className='border rounded px-4 py-2' type="text" id='pesquisa' onChange={filtrarLista}/>
                </div>
                {
                    listaTags.map((item, index) => {
                        return <Tag key={index} title={item} />
                    })
                }
            </div>
        </>
    )
}

export default Lista