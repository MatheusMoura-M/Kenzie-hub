import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Apii from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isShowModalCreate, setIsShowModalCreate] = useState(false);
  const [isShowModalUpdate, setIsShowModalUpdate] = useState(false);

  const addTechs = async (data) => {
    try {
      const resp = await Apii.post("users/techs", data);
      setIsShowModalCreate(false);
      setTechs([...techs, resp.data]);
      toast.success("Tecnologia cadastrada com sucesso")
    } catch (err) {
      toast.error("Essa tecnologia já está cadastrada")
    }
  };
  
  const deleteTechs = async (id) => {
    const filtered = techs.filter((tech) => tech.id !== id);

    try {
      await Apii.delete(`users/techs/${id}`);
      setTechs(filtered);
      toast.success("Tecnologia deletada com sucesso")
    } catch (err) {
      console.log(err);
    }
  };

  const updateTechs = async () => {

    console.log("asd")
    // try {
    //   await Apii.delete(`users/techs/${id}`);
    //   setTechs(filtered);
    //   toast.success("Tecnologia deletada com sucesso")
    // } catch (err) {
    //   console.log(err);
    // }
  };

  return (
    <TechContext.Provider
      value={{ addTechs, deleteTechs, updateTechs, isShowModalCreate, setIsShowModalCreate, isShowModalUpdate, setIsShowModalUpdate }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
