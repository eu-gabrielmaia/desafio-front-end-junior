import React from 'react';
import axios from 'axios';
import Tag from '../components/Tag.tsx';
import CardItem from '../components/CardItem.tsx';

function Lista (){

    const baseUrl:string = 'https://cataas.com/api/tags';
  
    const [listaTags, setLista] = React.useState<string[]>([]);

    const addItem = (item:string) => {
        setLista((prevList)=>([...prevList, item]));
    }

    const input = (document.getElementById('pesquisa') as HTMLInputElement);

    function filtrarLista(){
        if (listaTags.includes(input.value)){
            let listaFiltrada:string[], listaOriginal:string[];
            listaOriginal = listaTags;
            listaFiltrada = listaTags.filter(item => item === input.value);
            setLista(listaFiltrada);
            console.log(`Tem ${input.value} na lista`)
            if(input.value.trim() == ''){
                setLista(listaOriginal)
            }
        }
        if(listaTags.includes(input.value) === false){
                setLista([]);
                return <p>Nenhuma tags econtrada</p>
        }
    }

    React.useEffect(() => {
        axios.get(baseUrl).then((response) => {
            response.data.map((item:string) => {
                addItem(item);
            })
            }).catch((error) => {
            console.error(error);
            }).finally(() => {
            console.log('Requesição finalizada');
        })

        if (input) {
            input.onchange = filtrarLista;
        }
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