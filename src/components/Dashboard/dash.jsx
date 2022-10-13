import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { ThemeParagraph, ThemeSpan, ThemeTitle } from "../../styles/typography";
import Logo from "../../../public/assets/Logo.svg";
import { AuthContext } from "../../Contexts/AuthContext";
import { TechContext } from "../../Contexts/TechContext";
import { motion } from "framer-motion";
import LoadingPage from "../Loading/loading";
import { BoxMain, Header, Nav } from "./styled";
import { TechModal } from "../TechModal";

const Dash = () => {
  const navigate = useNavigate();
  const { user, setUser, loading } = useContext(AuthContext);
  const { isShowModal, setIsShowModal } = useContext(TechContext);

  if (loading) {
    return <LoadingPage />;
  }

  const Logout = () => {
    setUser();
    window.localStorage.clear();
    navigate("/");
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  return user ? (
    <>
      <motion.div
        animate={{ opacity: [0, 1], width: "100%", height: "100vh" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
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
            <ThemeTitle size="medium">Tecnologias</ThemeTitle>
            <ButtonSecondary onClick={() => showModal()} size="add">
              +
            </ButtonSecondary>
            {isShowModal && <TechModal />}
          </BoxMain>
        </Container>
      </motion.div>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default Dash;
