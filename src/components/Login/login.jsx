import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Box } from "../Register/styled";
import { FormLogin } from "./styled";
import SchemaLogin from "../validations/loginUser";
import { BsEyeFill } from "react-icons/bs";
import Apii from "../../services/api";
import { toast } from "react-toastify";

const Login = ({ setUser, loading, setLoading }) => {
  const [isShowPass, setIsShowPass] = useState(true);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  const onSubmit = (data) => {
    
    Apii.post("sessions", data)
    .then((resp) => {
      window.localStorage.clear();
      window.localStorage.setItem("@Token", resp.data.token);
      window.localStorage.setItem("@UserId", resp.data.user.id);
      setUser(resp.data.user);
      navigate("/dashboard")
    })
    .catch((err) => {
      toast.error("Combinação de email/senha incorreta");
    })
    .finally(() => {
      setLoading(false);
    });
    // {
    //   loading ? navigate("/loading") : navigate("/dashboard");
    // }
  };

  const goRegister = () => {
    navigate("/register");
  };

  return (
    <Container tag="main" size="large">
      <Box classs="boxLogoLogin">
        <img src="../../../public/assets/Logo.svg" alt="Logo" />
      </Box>
      <FormLogin classs="formLogin" onSubmit={handleSubmit(onSubmit)}>
        <ThemeTitle>Login</ThemeTitle>

        <div className="boxLabel">
          <input
            id="email"
            type="text"
            placeholder="Digite aqui seu email"
            {...register("email")}
          />
          {errors.email?.message}
          <label htmlFor="email">Email</label>
        </div>

        <div className="boxLabel">
          <input
            id="password"
            type={isShowPass ? "password" : "text"}
            placeholder="Digite aqui sua senha"
            {...register("password")}
          />
          <label htmlFor="password">Senha</label>
          {errors.password?.message}
          <BsEyeFill onClick={() => setIsShowPass(!isShowPass)} />
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
    </Container>
  );
};

export default Login;
