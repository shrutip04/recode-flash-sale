import axios from "axios";

const API = axios.create({
  baseURL: "https://recode-flash-sale.onrender.com",
});

export default API;