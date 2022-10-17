import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

// eslint-disable-next-line react/prop-types
const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isShowModalCreate, setIsShowModalCreate] = useState(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);
  const [techSelected, setTechSelected] = useState({});

  const getTech = (tech) => {
    setIsShowModalUpdate(true);
    setTechSelected(tech);
  };

  const addTechs = async (data) => {
    try {
      const resp = await Api.post("users/techs", data);
      setIsShowModalCreate(false);
      setTechs([...techs, resp.data]);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (err) {
      toast.error("Essa tecnologia já está cadastrada");
    }
  };

  const deleteTechs = async (id) => {
    const filtered = techs.filter((tech) => tech.id !== id);

    try {
      await Api.delete(`users/techs/${id}`);
      setTechs(filtered);
      toast.success("Tecnologia deletada com sucesso");
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  return (
    <TechContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        getTech,
        techSelected,
        techs,
        setTechs,
        addTechs,
        deleteTechs,
        isShowModalCreate,
        setIsShowModalCreate,
        isShowModalUpdate,
        setIsShowModalUpdate,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
