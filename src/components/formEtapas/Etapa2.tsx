import { useContext } from "react";
import { FormContext } from "../formEtapas/FormContext.tsx";
import { Link } from "react-router-dom";

function Etapa2() {
    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error("FormContext deve ser usado dentro de um FormProvider");
    }

    const { formData, setFormData } = formContext;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h2 className="font-bold mb-4 text-xl text-sky-800">Etapa 2: Dados pessoais</h2>

            <hr />

            <div className="my-2">
                <label className="block" htmlFor="nome">Nome</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="sobrenome">Sobrenome</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="text"
                    id="sobrenome"
                    name="sobrenome"
                    value={formData.sobrenome || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="nascimento">Data de Nascimento</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    value={formData.nascimento || ""}
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-end gap-5">
                <Link className="rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-800" to="/form/et3">
                    Avançar
                </Link>
                <input className="bg-gray-100 border rounded px-2 py-1" type="submit" value="Enviar" disabled />
            </div>
        </>
    );
}

export default Etapa2;
