import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const registerRequest = async (data) => {
    try {
      await Api.post("users", data);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (err) {
      err.response.data.message[0].includes("password")
        ? toast.error("Senha precisa de no mínimo 6 caracters")
        : toast.error("Email já existe");
    }
  };

  const loginRequest = async (data) => {
    setLoading(true);
    try {
      const resp = await Api.post("sessions", data);

      window.localStorage.setItem("@Token", resp.data.token);
      window.localStorage.setItem("@UserId", resp.data.user.id);
      setUser(resp.data.user);
      setTechs(resp.data.user.techs)
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
          const { data } = await Api.get("profile");
          setUser(data);
          setTechs(data.techs);
        } catch (err) {
          console.log(err);
        }
      }
      setLoading(false);
    }
    loadUser();
  }, [techs]);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        registerRequest,
        loginRequest,
        techs,
        setTechs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
