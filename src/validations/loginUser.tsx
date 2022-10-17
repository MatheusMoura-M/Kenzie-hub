import * as yup from "yup";

const SchemaLogin = yup.object().shape({
  
  email: yup
    .string()
    .required("Email obrigatório"),

    password: yup
    .string()
    .required('Senha é obrigatória')
})

export default SchemaLogin
