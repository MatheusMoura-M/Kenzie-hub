import { iDataProfile } from "../Contexts/AuthContext";
import Api from "./api";

export const profileData = async () => {
  const resp = await Api.get<iDataProfile>("profile");

  return resp.data
}
