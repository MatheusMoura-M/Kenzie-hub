import { iFormLogin, iUser } from "../Contexts/AuthContext";
import Api from "./api"

interface iLoginUserResponse {
  user: iUser;
  token: string;
}

export const loginUser = async (data: iFormLogin):Promise<iLoginUserResponse> => {
  const resp = await Api.post<iLoginUserResponse>("sessions", data);
  return resp.data
}
