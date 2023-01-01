import axios from "axios";

//from axios.create instance (google)
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
   
  });
  export default instance;