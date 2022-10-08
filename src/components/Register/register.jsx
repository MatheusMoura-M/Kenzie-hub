import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../styles/global";
import { FormRegister, Box } from "./styled";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import SchemaRegister from "../validations/registerUser";
import Apii from "../../services/api";
import { toast } from "react-toastify";
import { BsEyeFill } from "react-icons/bs";
import { RiErrorWarningFill } from "react-icons/ri";

const Register = () => {
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(true);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
  });

  const onSubmit = async (data) => {
    Apii.post("users", data)
      .then((resp) => {
        toast.success("Usuário cadastrado");
        navigate("/");
      })
      .catch((err) => {
        err.response.data.message[0].includes("password")
          ? toast.error("Senha precisa de no mínimo 6 caracters")
          : toast.error("Email já existe");
      });
  };

  return (
    <Container tag="main" size="large">
      <Box classs="boxLogo">
        <img src="../../../public/assets/Logo.svg" alt="Logo" />
        <Link to="/">Voltar</Link>
      </Box>

      <FormRegister onSubmit={handleSubmit(onSubmit)}>
        <Box classs="boxForm">
          <ThemeTitle>Crie sua conta</ThemeTitle>
          <ThemeParagraph>Rápido e grátis, vamos nessa!!</ThemeParagraph>
        </Box>

        <div className="boxLabel">
          <input
            id="name"
            placeholder="Digite aqui seu nome"
            {...register("name")}
          />
          <label htmlFor="name">Nome</label>
          <p>
            {errors.name && <RiErrorWarningFill />}
            {errors.name?.message}
          </p>
        </div>

        <div className="boxLabel">
          <input
            id="email"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          <label htmlFor="email">Email</label>
          <p>
            {errors.email && <RiErrorWarningFill />}
            {errors.name?.message}
          </p>
        </div>

        <div className="boxLabel">
          <input
            id="password"
            type={isShowPass ? "password" : "text"}
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <label htmlFor="password">Senha</label>
          <p>
            {errors.password && <RiErrorWarningFill />}
            {errors.password?.message}
          </p>
          <BsEyeFill onClick={() => setIsShowPass(!isShowPass)} />
        </div>

        <div className="boxLabel">
          <input
            id="confirmPassword"
            type={isShowConfirmPass ? "password" : "text"}
            placeholder="Confirme sua senha"
            {...register("confirmPassword")}
          />
          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <p>
            {errors.confirmPassword && <RiErrorWarningFill />}{" "}
            {errors.confirmPassword?.message}
          </p>
          <BsEyeFill onClick={() => setIsShowConfirmPass(!isShowConfirmPass)} />
        </div>

        <div className="boxLabel">
          <input id="bio" placeholder="Fale sobre você" {...register("bio")} />
          <label htmlFor="bio">Bio</label>
          <p>
            {errors.bio && <RiErrorWarningFill />}
            {errors.bio?.message}
          </p>
        </div>

        <div className="boxLabel">
          <input
            id="contact"
            placeholder="Opção de contato"
            {...register("contact")}
          />
          <label htmlFor="contact">Contato</label>
          <p>
            {errors.contact && <RiErrorWarningFill />}
            {errors.contact?.message}
          </p>
        </div>

        <div className="boxSelect">
          <label>Selecionar Módulo</label>
          <select {...register("course_module")}>
            {/* <option value=""></option> */}
            <option value="Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo (Introdução ao Frontend)
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo (Frontend Avançado)
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo (Introdução ao Backend)
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo (Backend Avançado)
            </option>
          </select>
        </div>

        <button type="submit">Cadastrar</button>
      </FormRegister>
    </Container>
  );
};

export default Register;
