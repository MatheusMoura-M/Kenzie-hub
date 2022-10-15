import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { ButtonPrimary, ButtonSecondary } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Box } from "../Register/styled";
import { FormLogin } from "./styled";
import SchemaLogin from "../../validations/loginUser";

import Logo from "../../../public/assets/Logo.svg";
import { AuthContext } from "../../Contexts/AuthContext";

const Login = () => {
  const [isShowPass, setIsShowPass] = useState(false);

  const { loginn } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <Container tag="main" size="large">
      <motion.div
        animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Box classs="boxLogoLogin">
          <img src={Logo} alt="Logo" />
        </Box>
      </motion.div>
      <motion.div
        animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <FormLogin
          isShowPass={isShowPass}
          classs="formLogin"
          onSubmit={handleSubmit(loginn)}
        >
          <ThemeTitle>Login</ThemeTitle>

          <div className="boxLabel">
            <input
              id="email"
              type="text"
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

          <ButtonPrimary size="small" type="submit">
            Entrar
          </ButtonPrimary>
          <div className="boxRegister">
            <ThemeParagraph>Ainda não possui uma conta?</ThemeParagraph>
            <ButtonSecondary
              size="big"
              type="button"
              onClick={() => goRegister()}
            >
              Cadastre-se
            </ButtonSecondary>
          </div>
        </FormLogin>
      </motion.div>
    </Container>
  );
};

export default Login;
