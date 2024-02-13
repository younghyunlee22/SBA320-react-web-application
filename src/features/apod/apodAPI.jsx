import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_APOD_API_KEY;
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const fetchAPOD = async () => {
  try {
    const response = await axios.get(`${BASE_URL}?api_key=${API_KEY}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchAPOD;
