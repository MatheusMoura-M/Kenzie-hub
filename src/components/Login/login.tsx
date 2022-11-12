import { yupResolver } from "@hookform/resolvers/yup";
import { Dispatch, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { HiEyeOff, HiEye } from "react-icons/hi";
import { RiErrorWarningFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import SchemaLogin from "../../validations/loginUser";
import { AuthContext } from "../../Contexts/AuthContext";
import { ButtonPrimary } from "../../styles/buttons";
import { Box } from "../Register/styled";
import { Container } from "../../styles/container";
import Logo from "../../../public/assets/Logo.svg";
import { FormLogin } from "./styled";

interface iForm {
  email: string;
  password: string;
}

const Login = () => {
  const [isShowPass, setIsShowPass] = useState<boolean>(false);

  const { loginRequest } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iForm>({
    resolver: yupResolver(SchemaLogin),
  });

  return (
    <Container tag="main" size="large">
      <motion.div
        animate={{ opacity: [0, 1], x: [-10, 4, 0], y: [-10, 4, 0] }}
        exit={{ opacity: 0, x: -10 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <Box styleBox="boxLogoLogin">
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
          onSubmit={handleSubmit(loginRequest)}
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
            <Link to={"/register"}>Cadastre-se</Link>
          </div>
        </FormLogin>
      </motion.div>
    </Container>
  );
};

export default Login;
