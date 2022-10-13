import { createContext, useContext, useEffect, useState } from "react";
import Apii from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const { techs, setTechs } = useContext(AuthContext);
  const [isShowModal, setIsShowModal] = useState(false);

  const addTechs = async (data) => {
    try {
      const resp = await Apii.post("users/techs", data);
      setIsShowModal(false);
      setTechs([...techs, resp.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechs = async (id) => {
    try {
      await Apii.delete(`users/techs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{ addTechs, deleteTechs, isShowModal, setIsShowModal }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
