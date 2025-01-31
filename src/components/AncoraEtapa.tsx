
function AncoraEtapa (props: {texto: string, href:string}){
    return(
        <>
            <div className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-300">
                <a href={props.href}>{props.texto}</a>
            </div>
        </>
    )
}

export default AncoraEtapa