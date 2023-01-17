import axios from "axios";

const instance = axios.create({
  baseURL: "https://shopping-cart-server.vercel.app",
});
export default instance;
