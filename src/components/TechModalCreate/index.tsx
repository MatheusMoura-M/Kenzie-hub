import { useContext } from "react";
import { ButtonPrimary } from "../../styles/buttons";
import { MdClose } from "react-icons/md";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Modal } from "./style";
import { useForm } from "react-hook-form";
import { RiErrorWarningFill } from "react-icons/ri";
import { TechContext } from "../../Contexts/TechContext";
import { yupResolver } from "@hookform/resolvers/yup";
import SchemaCreateTechs from "../../validations/createTech";

export interface iUseFormTech {
  title: string;
  status: string;
}

export const TechModalCreate = () => {
  const { setIsShowModalCreate, addTechs } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUseFormTech>({ resolver: yupResolver(SchemaCreateTechs) });

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="boxTitle">
            <ThemeTitle size="titleModal">Cadastrar tecnologia</ThemeTitle>
            <button onClick={() => setIsShowModalCreate(false)}>
              <MdClose size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit(addTechs)} className="boxContent">
            <div>
              <>
                <ThemeParagraph>Nome da tecnologia</ThemeParagraph>
                <input type="text" placeholder="Digite a tecnologia" {...register("title")} />
                <p className="msg_error">
                  {errors.title && <RiErrorWarningFill />}
                  {errors.title?.message}
                </p>
              </>
            </div>
            <div>
              <ThemeParagraph>Selecionar status</ThemeParagraph>
              <select {...register("status")}>
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
