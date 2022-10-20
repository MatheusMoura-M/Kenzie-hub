import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { toast } from "react-toastify";
import Api from "../services/api";
import { AuthContext, iTechs } from "./AuthContext";

interface iTechsProps{
  children: ReactNode;
}

interface iTechsContext{
  getTech: (tech: iTechs) => void;
  techSelected: iTechs;
  addTechs: (data: {}) => Promise<void>;
  deleteTechs: (id: string) => Promise<void>;
  isShowModalCreate: boolean;
  setIsShowModalCreate: Dispatch<SetStateAction<boolean>>;
  isShowModalUpdate: boolean;
  setIsShowModalUpdate: Dispatch<SetStateAction<boolean>>;
}

export const TechContext = createContext({} as iTechsContext);

// eslint-disable-next-line react/prop-types
const TechProvider = ({ children }: iTechsProps) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isShowModalCreate, setIsShowModalCreate] = useState<boolean>(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState<boolean>(false);
  const [techSelected, setTechSelected] = useState<iTechs>({} as iTechs);

  const getTech = (tech: iTechs) => {
    setIsShowModalUpdate(true);
    setTechSelected(tech);
  };

  const addTechs = async (data: {}) => {
    try {
      const resp = await Api.post("users/techs", data);
      setIsShowModalCreate(false);
      setTechs([...techs, resp.data]);
      toast.success("Tecnologia cadastrada com sucesso");
    } catch (err) {
      toast.error("Essa tecnologia já está cadastrada");
    }
  };

  const deleteTechs = async (id: string) => {
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
