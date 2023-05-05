import * as yup from "yup";

export const schema = yup.object({
    email: yup.string().required("O campo é obrigatório").email("O email deve ser um email válido."),
    password: yup.string().required("O campo é obrigatório")
})
export type FormDataLoginUser = yup.InferType<typeof schema>