import * as yup from 'yup';

export const schemaCreateContact = yup.object().shape({
  nomeCompleto: yup.string().required(),
  email: yup.string().email().required(),
  telefone: yup.string().required(),
  dataRegistro: yup.date().default(() => new Date()),
});

export const schemaUpdateContact = yup.object().shape({
    id: yup.string().required(),
    name: yup.string(),
    email: yup.string().email(),
    phone: yup.string(),
  });