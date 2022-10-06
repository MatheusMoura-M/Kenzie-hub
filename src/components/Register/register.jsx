import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../styles/global";
import { Form, BoxLogo } from "./styled";

const Register = () => {
  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    userName: yup.string().required("Nome obrigatório"),

    fullName: yup.string().required("Nome completo obrigatório"),

    email: yup.string().required("Email obrigatório").email("Email inválido"),

    confirmEmail: yup
      .string()
      .required("Confirmação de email obrigatório")
      .email("Email inválido"),

    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,18}$",
        "Deve conter ao menos um dígito || Deve conter ao menos uma letra minúscula || Deve conter ao menos uma letra maiúscula || Deve conter ao menos um caractere especial || Deve conter no mínimo 8 caracteres, e no máximo 18 caracteres"
      ),

    confirmPassword: yup.string().required("Confirmação de senha obrigatória"),

    image: yup.string().required("Url obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    navigate("/card");
  };

  return (
    <Container tag="main" size="large">
      <Box>
        <img src="../../../public/assets/.svg" alt="Logo" />
        <Link>Voltar</Link>
      </Box>
      <Form onSubmit={handleSubmit(onSubmit)}>

        

        <input placeholder="Nome de usuário*" {...register("userName")} />
        {errors.userName?.message}

        <input placeholder="Nome completo*" {...register("fullName")} />
        {errors.fullName?.message}

        <input placeholder="Email*" {...register("email")} />
        {errors.email?.message}

        <input placeholder="Confirme seu Email*" {...register("confirmEmail")} />
        {errors.confirmEmail?.message}

        <input type="password" placeholder="Senha*" {...register("password")} />
        {errors.password?.message}

        <input
          type="password"
          placeholder="Confirme sua senha*"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword?.message}

        <input placeholder="URL da imagem*" {...register("image")} />
        {errors.image?.message}

        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
};

export default Register;
