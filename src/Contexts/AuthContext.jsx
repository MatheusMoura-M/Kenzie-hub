import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Apii from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@Token");

      if (token) {
        try {
          setLoading(true)
          const { data } = await Apii.get("/profile");

          setUser(data);
          navigate("/dashboard");
          setLoading(false)
        } catch (error) {
          console.error(error);
          setLoading(false)
        }
      }
    }

    loadUser();
  }, []);

  const onSubmit = (data) => {
    Apii.post("sessions", data)
      .then((resp) => {
          setLoading(true)
          window.localStorage.clear();
          window.localStorage.setItem("@Token", resp.data.token);
          window.localStorage.setItem("@UserId", resp.data.user.id);
          setUser(resp.data.user)
          navigate("/dashboard");
      })
      .catch((err) => {
        toast.error("Combinação de email/senha incorreta");
      })
      .finally(() => {
        setLoading(false)
      });
  };

  return(
    <AuthContext.Provider value={{user, setUser, loading, onSubmit}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider
