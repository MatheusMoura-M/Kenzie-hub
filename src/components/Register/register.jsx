import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../styles/global";
import { FormRegister, Box } from "./styled";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import SchemaRegister from "../../validations/registerUser";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";
import { motion } from "framer-motion";
import Logo from "../../../public/assets/Logo.svg";
import { ButtonNegative } from "../../styles/buttons";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const { Register } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
  });

  return (
    <Container tag="main" size="large">
      <motion.div
        animate={{ opacity: [0, 1], x: [-5, 0], y: [-5, 0] }}
        exit={{ opacity: 0, x: -5, y: -5 }}
        transition={{ease: "easeInOut", duration: .5 }}
      >
        <Container tag="section" size="section">
          <Box classs="boxLogo">
            <img src={Logo} alt="Logo" />
            <Link to="/">Voltar</Link>
          </Box>

          <FormRegister onSubmit={handleSubmit(Register)}>
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
                {errors.email?.message}
              </p>
            </div>

            <div className="boxLabel">
              <input
                id="password"
                type={isShowPass ? "text" : "password"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <label htmlFor="password">Senha</label>
              <p>
                {errors.password && <RiErrorWarningFill />}
                {errors.password?.message}
              </p>
              {isShowPass ? (
                <HiEye onClick={() => setIsShowPass(!isShowPass)} />
              ) : (
                <HiEyeOff onClick={() => setIsShowPass(!isShowPass)} />
              )}
            </div>

            <div className="boxLabel">
              <input
                id="confirmPassword"
                type={isShowConfirmPass ? "text" : "password"}
                placeholder="Confirme sua senha"
                {...register("confirmPassword")}
              />
              <label htmlFor="confirmPassword">Confirmar Senha</label>
              <p>
                {errors.confirmPassword && <RiErrorWarningFill />}
                {errors.confirmPassword?.message}
              </p>
              {isShowConfirmPass ? (
                <HiEye
                  onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}
                />
              ) : (
                <HiEyeOff
                  onClick={() => setIsShowConfirmPass(!isShowConfirmPass)}
                />
              )}
            </div>

            <div className="boxLabel">
              <input
                id="bio"
                placeholder="Fale sobre você"
                {...register("bio")}
              />
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

            <ButtonNegative type="submit">Cadastrar</ButtonNegative>
          </FormRegister>
        </Container>
      </motion.div>
    </Container>
  );
};

export default Register;
