import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonSecondary } from "../../styles/buttons";
import { Container } from "../../styles/global";
import { ThemeParagraph, ThemeSpan, ThemeTitle } from "../../styles/typography";
import Logo from "../../../public/assets/Logo.svg"
import { BoxMain, Header, Nav } from "./styled";

const Dash = ({ user, setUser }) => {
  // const [userr, setUserr] = useState([])
  const navigate = useNavigate()

  // Apii.get("profile")
  // .then((resp) => {
  //   // console.log(resp.data)
  // })
  // .catch(err => console.log(err))

  const Logout = () => {
    setUser();
    window.localStorage.clear();
    navigate("/")
  };

  return (
    <>
      <Nav>
        <div>
          <img src={Logo} alt="Logo" />
          <ButtonSecondary onClick={() => Logout()} size="small">Sair</ButtonSecondary>
        </div>
      </Nav>
      <Header>
        <div>
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
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </ThemeSpan>
        </BoxMain>
      </Container>
    </>
  );
};

export default Dash;
