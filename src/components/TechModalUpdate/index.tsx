import { useContext } from "react";
import { ButtonNegative, ButtonPrimary } from "../../styles/buttons";
import { MdClose } from "react-icons/md";
import { ThemeParagraph, ThemeTitle } from "../../styles/typography";
import { Modal } from "../TechModalCreate/style";
import { useForm } from "react-hook-form";
import { TechContext } from "../../Contexts/TechContext";
import Api from "../../services/api";
import { toast } from "react-toastify";
import { iUseFormTech } from "../TechModalCreate";
import { AuthContext } from "../../Contexts/AuthContext";

export const TechModalUpdate = () => {
  const { setIsShowModalUpdate, techSelected } = useContext(TechContext);
  const { loadUser } = useContext(AuthContext)
  const { register, handleSubmit } = useForm<iUseFormTech>({
    defaultValues: { title: techSelected.title, status: techSelected.status },
  });

  const updateTechs = async (data: iUseFormTech) => {
    try {
      await Api.put(`users/techs/${techSelected.id}`, data);

      setIsShowModalUpdate(false);

      loadUser()

      toast.success("Tecnologia atualizada com sucesso");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <div className="overlay">
        <div className="content">
          <div className="boxTitle">
            <ThemeTitle size="titleModal">Atualizar tecnologia</ThemeTitle>
            <button onClick={() => setIsShowModalUpdate(false)}>
              <MdClose size={18} />
            </button>
          </div>
          <form onSubmit={handleSubmit(updateTechs)} className="boxContent">
            <div>
              <ThemeParagraph>Nome da tecnologia</ThemeParagraph>
              <input type="text" disabled {...register("title")} />
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
              Salvar alterações
            </ButtonPrimary>
          </form>
        </div>
      </div>
    </Modal>
  );
};
