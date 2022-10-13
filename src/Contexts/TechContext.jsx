import { createContext, useState } from "react";
import Apii from "../services/api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const addTechs = async (data) => {
    try {
      const resp = await Apii.post("users/techs", data);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTechs = async (id) => {
    try {
      const resp = await Apii.post(`users/techs/${id}`);
      console.log(resp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider value={{addTechs, deleteTechs, isShowModal, setIsShowModal }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
