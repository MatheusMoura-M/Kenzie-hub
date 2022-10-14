import React, { useContext } from "react";
import { ButtonNegative } from "../../styles/buttons";
import { MdClose } from "react-icons/md";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Modal } from "../TechModalCreate/style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SchemaTech } from "../../validations/tech";
import { TechContext } from "../../Contexts/TechContext";

export const TechModalUpdate = () => {
  const { setIsShowModalUpdate, addTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaTech),
  });

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="boxTitle">
            <ThemeTitle size="titleModal">Cadastrar Tecnologia</ThemeTitle>
            <button onClick={() => setIsShowModalUpdate(false)}>
              <MdClose size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit(addTechs)} className="boxContent">
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
            <ButtonNegative type="submit" size="update">
              Salvar alterações
            </ButtonNegative>
          </form>
        </div>
      </div>
    </Modal>
  );
};
