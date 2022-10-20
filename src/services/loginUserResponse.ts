import { iUser } from "../Contexts/AuthContext";
import Api from "./api"

interface iDataLogin {
  email: string;
  password: string;
}

interface iLoginUserResponse {
  user: iUser;
  token: string;
}

export const loginUser = async (data: iDataLogin):Promise<iLoginUserResponse> => {
  const resp = await Api.post<iLoginUserResponse>("sessions", data);
  
  return resp.data
}
