import { iFormRegister } from "../Contexts/AuthContext";
import Api from "./api";

interface iRegisterUserResponse {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

export const registerUser = async (
  data: iFormRegister
): Promise<iRegisterUserResponse> => {
  const resp = await Api.post<iRegisterUserResponse>("users", data);

  return resp.data;
};
