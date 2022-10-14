import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Apii from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techsUser, setTechsUser] = useState(null);
  const [techs, setTechs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const Register = async (data) => {
    try {
      await Apii.post("users", data);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (error) {
      err.response.data.message[0].includes("password")
        ? toast.error("Senha precisa de no mínimo 6 caracters")
        : toast.error("Email já existe");
    }
  };

  const Login = async (data) => {
    try {
      const resp = await Apii.post("sessions", data);
      setLoading(true);

      window.localStorage.clear();
      window.localStorage.setItem("@Token", resp.data.token);
      window.localStorage.setItem("@UserId", resp.data.user.id);

      setUser(resp.data.user);
      navigate("/dashboard");
    } catch (error) {
      toast.error("Combinação de email/senha incorreta");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@Token");

    async function loadUser() {
      if (token) {
        try {
          const { data } = await Apii.get("profile");
          setUser(data);
          setTechs(data.techs);
          navigate("/dashboard");
        } catch (error) {
          console.error(error);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [loading]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        Register,
        Login,
        techs,
        setTechs,
        techsUser,
        setTechsUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
