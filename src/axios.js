//axios is fetching library
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-e3d69/us-central1/api", //The api cloud function url
});

export default instance;
