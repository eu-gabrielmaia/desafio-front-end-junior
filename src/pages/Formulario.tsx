import { FormProvider } from "../components/formEtapas/FormContext.tsx";
import { Routes, Route } from "react-router-dom";
import AncoraEtapa from "../components/AncoraEtapa";
import Etapa1 from "../components/formEtapas/Etapa1";
import Etapa2 from "../components/formEtapas/Etapa2";
import Etapa3 from "../components/formEtapas/Etapa3";

function Formulario() {
    return (
        <FormProvider>
            <div className="bg-gradient-to-r from-sky-800 to-sky-700 p-4 text-white text-center text-2xl">
                <h1 className="font-bold uppercase">Formulário</h1>
            </div>

            <div className="flex items-center p-4 gap-4">
                <AncoraEtapa href="/form/et1" texto="Etapa 1" />
                <AncoraEtapa href="/form/et2" texto="Etapa 2" />
                <AncoraEtapa href="/form/et3" texto="Etapa 3" />
            </div>

            <form className="p-4 m-8 border-2 border-sky-800 rounded">
                <Routes>
                    <Route path="et1" element={<Etapa1 />} />
                    <Route path="et2" element={<Etapa2 />} />
                    <Route path="et3" element={<Etapa3 />} />
                </Routes>
            </form>
        </FormProvider>
    );
}

export default Formulario;
