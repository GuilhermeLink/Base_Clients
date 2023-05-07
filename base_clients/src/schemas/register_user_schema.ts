import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("O campo é obrigatório"),
  email: yup
    .string()
    .required("O campo é obrigatório")
    .email("O email deve ser um email válido"),
  phone: yup
    .string()
    .required("O campo é obrigatório"),
  password: yup.string().required("O campo é obrigatório"),
  confirmPassword: yup.string().required("O campo é obrigatório").oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormDataRegisterUser = yup.InferType<typeof schema>