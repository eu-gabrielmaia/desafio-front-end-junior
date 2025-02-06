import { createContext, useState } from "react";

type FormDataType = {
  nome: string;
  email: string;
  senha: string;
  senha2: string;
  sobrenome: string;
  nascimento: string;
  bairro: string;
  rua: string;
  complemento: string;
  numero: string;
};

export const FormContext = createContext<{
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
} | null>(null);

export function FormProvider({ children }: { children: React.ReactNode }) {
  // Estado global para armazenar os dados do formulário
  const [formData, setFormData] = useState<FormDataType>({
    nome: "",
    email: "",
    senha: "",
    senha2: "",
    sobrenome: "",
    nascimento: "",
    bairro: "",
    rua: "",
    complemento: "",
    numero: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
}
