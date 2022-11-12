import * as yup from "yup";

const SchemaCreateTechs = yup.object().shape({
  title: yup.string().required("Nome obrigatório"),
});

export default SchemaCreateTechs;
