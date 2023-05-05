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
  password: yup
    .string()
    .required("Senha obrigatória")
    .min(8, "A senha deve ter no mínimo 8 caracteres")
    .matches(/[a-z]/, "Deve conter ao menos uma letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos uma letra maiúscula")
    .matches(/\d/, "Deve conter ao menos um número")
    .matches(/\W|_/, "Deve conter ao menos um caracter especial"),
  confirmPassword: yup
    .string()
    .required("O campo é obrigatório")
    .oneOf([yup.ref('password')], 'As senhas devem ser iguais'),
});

export type FormDataRegisterUser = yup.InferType<typeof schema>