import React, { useContext } from "react";
import { ButtonPrimary } from "../../styles/buttons";
import { MdClose } from "react-icons/md";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Modal } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaTech } from "../validations/tech";
import { TechContext } from "../../Contexts/TechContext";

export const TechModal = () => {
  const { setIsShowModal, addTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaTech),
  });

  const closeModal = () => {
    setIsShowModal(false);
  };

  const submit = (data) => {
    addTechs(data);
  };

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="boxTitle">
            <ThemeTitle size="titleModal">Cadastrar Tecnologia</ThemeTitle>
            <button onClick={() => closeModal()}>
              <MdClose size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)} className="boxContent">
            <div>
              <ThemeParagraph>Nome</ThemeParagraph>
              <input type="text" {...register("title")} />
              {errors.name?.message}
            </div>
            <div>
              <ThemeParagraph>Selecionar Status</ThemeParagraph>
              <select {...register("status")}>
                {/* <option value=""></option> */}
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
            </div>
            <ButtonPrimary type="submit" size="btnModal">
              Cadastrar tecnologia
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </Modal>
  );
};
