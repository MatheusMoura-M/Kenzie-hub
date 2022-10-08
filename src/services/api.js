import axios from "axios";

const token = window.localStorage.getItem("@Token")

const Apii = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`,
  },
  timeout: 5000,
});

export default Apii;
