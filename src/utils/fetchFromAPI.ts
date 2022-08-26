import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const RAPID_API_KEY: string = process.env.REACT_APP_RAPID_API_KEY ?? "";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
