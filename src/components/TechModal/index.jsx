import React from "react";
import { ButtonPrimary, ButtonSecondary } from "../../styles/buttons";
import { MdClose } from "react-icons/md";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Modal } from "./style";

export const TechModal = () => {
  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="boxTitle">
            <ThemeTitle size="titleModal">Cadastrar Tecnologia</ThemeTitle>
            <button>
              <MdClose size={18} />
            </button>
          </div>
          <div className="boxContent">
            <div>
              <ThemeParagraph>Nome</ThemeParagraph>
              <input type="text" />
            </div>
            <div>
              <ThemeParagraph>Selecionar Status</ThemeParagraph>
              <select>
                <option value=""></option>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <ButtonPrimary size="btnModal">Cadastrar tecnologia</ButtonPrimary>
          </div>
        </div>
      </div>
    </Modal>
  );
};
