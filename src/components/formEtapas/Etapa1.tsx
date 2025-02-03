function Etapa1(){
    return(
        <>
            <h2 className="font-bold mb-4 text-xl text-sky-800">Etapa 1: Definir cadastro</h2>

            <hr />

            <div className="my-2">
                <label className="block" htmlFor="email">Email</label>
                <input className="border rounded w-full px-2 py-1" type="email" id="email" name="email" required/>
            </div>

            <div className="my-2">
                <label className="block" htmlFor="senha">Senha</label>
                <input className="border rounded w-full px-2 py-1" type="password" id="senha" name="senha" required/>
            </div>

            <div className="my-2">
                <label className="block" htmlFor="senha2">Confirmar Senha</label>
                <input className="border rounded w-full px-2 py-1" type="password" id="senha2" name="senha2" required/>
            </div>

            <div className="flex justify-end gap-5">
                <a className="rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-800" id="avancar"  href='/form/et2'>Avancar</a>
                <input className="bg-gray-100 border rounded px-2 py-1" type="submit" value="Enviar" disabled/>
            </div>
        </>
    )
}

export default Etapa1