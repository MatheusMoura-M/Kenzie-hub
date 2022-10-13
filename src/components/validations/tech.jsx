import * as yup from "yup";

export const SchemaTech = yup.object().shape({
  title: yup.string().required("Tecnologia obrigatória"),
});
