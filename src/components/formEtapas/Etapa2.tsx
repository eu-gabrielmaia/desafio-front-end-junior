
function Etapa2() {
    return (
        <>
            <h2 className="font-bold mb-4 text-xl text-sky-800">Etapa 2: Dados pessoais</h2>

            <hr />

            <div className="my-2">
                <label className="block" htmlFor="nome">Nome</label>
                <input className="border rounded w-full px-2 py-1" type="text" id="nome" name="nome" required />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="sobrenome">Sobrenome</label>
                <input className="border rounded w-full px-2 py-1" type="text" id="sobrenome" name="sobrenome" required />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="nacimento">Data de Nascimento</label>
                <input className="border rounded w-full px-2 py-1" type="date" id="nacimento" name="nacimento"/>
            </div>

            <div className="flex justify-end gap-5">
                <input className="rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-800" type="button" value="Avançar" id="avancar" />
                <input className="bg-gray-100 border rounded px-2 py-1" type="submit" value="Enviar" disabled />
            </div>
        </>
    )
}

export default Etapa2