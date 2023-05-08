import * as yup from "yup";

export const schemaCreateClient = yup.object().shape({
  nome: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  dataRegistro: yup.date().required(),
});

export const schemaUpdateClient = yup.object().shape({
    nome: yup.string(),
    email: yup.string().email(),
    telefone: yup.string(),
});