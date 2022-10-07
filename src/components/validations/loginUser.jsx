import * as yup from "yup";

const SchemaLogin = yup.object().shape({
  
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido"),

    password: yup
    .string()
    .required('Senha é obrigatória')
    .matches(/[a-z, A-Z]/, 'Deve conter ao menos 1 letra')
    .matches(/(\d)/, 'Deve conter ao menos um número')
    .matches(/(\W)|_/, 'Deve conter ao menos um caracter especial')
    .matches(/.{8,}/, 'Deve ter no minimo 8 digitos'),
})

export default SchemaLogin
