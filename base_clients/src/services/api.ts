import axios from "axios";

/*API LOCAL FAKE => "http://localhost:3001/" (EM CASOS DE EMERGÊNCIA) */

export const apiFake = axios.create({
  baseURL: "http://localhost:5173/" , 
  timeout: 3000,
});

