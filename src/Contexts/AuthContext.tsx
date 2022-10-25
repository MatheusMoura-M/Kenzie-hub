import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../services/api";
import { loginUser } from "../services/loginUserResponse";

interface iAuthProps {
  children: ReactNode;
}

export interface iFormLogin {
  email: string;
  password: string;
}

interface iAuth{
  user: iUser | null;
  setUser: Dispatch<SetStateAction<iUser | null>>;
  techs: iTechs[];
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  registerRequest: (data: {}) => Promise<void>
  loginRequest: (data: iFormLogin) => Promise<void>
  setTechs: Dispatch<SetStateAction<iTechs[]>>;
  loadUser(): Promise<void>;
}

export interface iTechs {
  id?: string;
  status: string;
  title: string;
}

export interface iUser {
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: iTechs[];
}

export const AuthContext = createContext({} as iAuth);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }: iAuthProps) => {
  const [user, setUser] = useState<iUser | null>({} as iUser);
  const [techs, setTechs] = useState<iTechs[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const registerRequest = async (data: {}) => {
    try {
      await Api.post("users", data);
      toast.success("Usuário cadastrado");
      navigate("/");
    } catch (error: any) {
      // eslint-disable-next-line no-unused-expressions
      error.response.data.message[0].includes("password")
        ? toast.error("Senha precisa de no mínimo 6 caracters")
        : toast.error("Email já existe");
    }
  };

  const loginRequest = async (data: iFormLogin) => {
    setLoading(true);
    try {
      const resp = await loginUser(data)

      const token = localStorage.getItem("@Token");
      Api.defaults.headers.authorization = `Bearer ${token}`;
      
      window.localStorage.setItem("@Token", resp.token);
      window.localStorage.setItem("@UserId", resp.user.id);
      
      setUser(resp.user);
      setTechs(resp.user.techs);

      navigate("/dashboard");
      location.reload()

    } catch (error) {
      toast.error("Combinação de email/senha incorreta");
    } finally {
      setLoading(false);
    }
  };

  
  async function loadUser() {

    const token = localStorage.getItem("@Token");
    
    if (token) {
      try {
        Api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await Api.get("profile");
        
        setUser(data);
        setTechs(data.techs);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    setLoading(false)
  }
  useEffect(() => {
    loadUser()
  }, []);

  return (
    <AuthContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        user,
        setUser,
        loading,
        setLoading,
        registerRequest,
        loginRequest,
        techs,
        setTechs,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
