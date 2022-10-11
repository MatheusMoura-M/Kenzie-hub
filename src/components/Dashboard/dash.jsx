import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { ThemeParagraph, ThemeSpan, ThemeTitle } from "../../styles/typography";
import Logo from "../../../public/assets/Logo.svg";
import { AuthContext } from "../../Contexts/AuthContext";
import { motion } from "framer-motion";
import LoadingPage from "../Loading/loading";
import { BoxMain, Header, Nav } from "./styled";

const Dash = () => {
  const navigate = useNavigate();
  const { user, setUser, loading } = useContext(AuthContext);

  if (loading) {
    <>
      <LoadingPage />
    </>;
  }

  const Logout = () => {
    setUser();
    window.localStorage.clear();
    navigate("/");
  };

  return user ? (
    <>
      <motion.div 
        animate={{ opacity: [0, 1], width: "100%", height: "100vh" }}
        exit={{ opacity: 0}}
        transition={{ duration: .8 }}
      >
        <Nav>
          <div>
            <img src={Logo} alt="Logo" />
            <ButtonSecondary onClick={() => Logout()} size="small">
              Sair
            </ButtonSecondary>
          </div>
        </Nav>
        <Header>
          <div className="boxHeaderMain">
            <ThemeTitle size="medium">{`Olá, ${user.name}`}</ThemeTitle>
            <ThemeParagraph>{user.course_module}</ThemeParagraph>
          </div>
        </Header>
        <Container tag="main" size="default">
          <BoxMain>
            <ThemeTitle size="medium">
              Que pena! Estamos em desenvolvimento :(
            </ThemeTitle>
            <ThemeSpan size="light">
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </ThemeSpan>
          </BoxMain>
        </Container>
      </motion.div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dash;
