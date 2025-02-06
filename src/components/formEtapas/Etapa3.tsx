import { useContext } from "react";
import { FormContext } from "../formEtapas/FormContext.tsx";

function Etapa3() {
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
            <h2 className="font-bold mb-4 text-xl text-sky-800">Etapa 3: Endereço completo</h2>

            <hr />

            <div className="my-2">
                <label className="block" htmlFor="bairro">Bairro</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="text"
                    id="bairro"
                    name="bairro"
                    value={formData.bairro || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="rua">Rua</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="text"
                    id="rua"
                    name="rua"
                    value={formData.rua || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="complemento">Complemento</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="text"
                    id="complemento"
                    name="complemento"
                    value={formData.complemento || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="numero">Número</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="number"
                    id="numero"
                    name="numero"
                    value={formData.numero || ""}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="flex justify-end gap-5">
                <input className="bg-gray-100 border rounded px-2 py-1" type="submit" value="Enviar" disabled />
            </div>
        </>
    );
}

export default Etapa3;
