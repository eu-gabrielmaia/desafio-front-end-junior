import { useContext } from "react";
import { FormContext } from "../formEtapas/FormContext.tsx";
import { Link } from "react-router-dom";

function Etapa1() {
    const formContext = useContext(FormContext);

    if (!formContext) {
        throw new Error("FormContext deve ser usado dentro de um FormProvider");
    }

    const { formData, setFormData } = formContext;

    const isFormComplete = Object.values(formData).every((value) => value.trim() !== "");

    return (
        <>
            <h2 className="font-bold mb-4 text-xl text-sky-800">Etapa 1: Definir cadastro</h2>
            <hr />

            <div className="my-2">
                <label className="block" htmlFor="email">Email</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="senha">Senha</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="password"
                    id="senha"
                    name="senha"
                    required
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                />
            </div>

            <div className="my-2">
                <label className="block" htmlFor="senha2">Confirmar Senha</label>
                <input
                    className="border rounded w-full px-2 py-1"
                    type="password"
                    id="senha2"
                    name="senha2"
                    required
                    value={formData.senha2}
                    onChange={(e) => setFormData({ ...formData, senha2: e.target.value })}
                />
            </div>

            <div className="flex justify-end gap-5">
                <Link className="rounded bg-sky-500 px-2 py-1 text-white hover:bg-sky-800" to="/form/et2">Avançar</Link>
                <input
                    className={`px-2 py-1 rounded ${isFormComplete ? "bg-red-500 text-white hover:bg-red-800" : "bg-gray-100"}`}
                    type="submit"
                    value="Enviar"
                    disabled={!isFormComplete}
                />
            </div>
        </>
    );
}

export default Etapa1;
