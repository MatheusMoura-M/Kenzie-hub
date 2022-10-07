import * as yup from "yup";

const SchemaRegister = yup.object().shape({
  
  name: yup
    .string()
    .required("Nome obrigatório"),

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

  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),

  bio: yup.string().required("Bio obrigatória"),

  contact: yup
    .string()
    .required("Contato obrigatório")
    .matches(/^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/, "Ex: (52) 99999-9999"),

  course_module: yup.string()
});

export default SchemaRegister
