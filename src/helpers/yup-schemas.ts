import * as yup from "yup";

yup.setLocale({
    string: {
        email: 'Formato de e-mail inválido'
    }
})
export const validationUserPost = yup.object().shape({
    name: yup.string().required("O nome é obrigatório").max(15, "O título precisa ter menosde 15 caracteres"),
    lastName: yup.string().required("O sobrenome é obrigatório").max(15, "O título precisa ter menosde 15 caracteres"),
    email: yup.string().required("O E-mail é obrigatório")
})
export const validationUserUpdate = yup.object().shape({
    name: yup.string().required("O nome é obrigatório").max(15, "O título precisa ter menosde 15 caracteres"),
    lastName: yup.string().required("O sobrenome é obrigatório").max(15, "O título precisa ter menosde 15 caracteres"),
    email: yup.string().required("O E-mail é obrigatório")
})