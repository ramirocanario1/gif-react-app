import axios from "axios";

import { API_KEY } from "../../API_KEY";

const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
const limit = 20;

const gifAPI = axios.create({
  baseURL: URL,
});

export const getGifs = (search) => gifAPI.get(`&limit=${limit}&q=${search}`);

const trendingSearchUrl = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;
export const getTrendingSearchs = async () => {
  const res = await axios.get(trendingSearchUrl);
  return res.data.data;
};

const categoriesUrl = `https://api.giphy.com/v1/gifs/categories?api_key=${API_KEY}`;
export const getCategories = async () => {
  const res = await axios.get(categoriesUrl);
  return res.data.data.map((c) => c.name);
};
