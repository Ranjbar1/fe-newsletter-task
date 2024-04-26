import axios from "axios";

const NYT_API_KEY = import.meta.env.VITE_NYTIMES_API_KEY;
const NYT_BASE_URL = import.meta.env.VITE_NYTIMES_BASE_URL;
const NYTApi = axios.create({
  baseURL: `${NYT_BASE_URL}?api-key=${NYT_API_KEY}&`,
});

export default NYTApi;

export async function getNYTBlogs({ searchTerm }: { searchTerm: string }) {
  const res = (await NYTApi.get(`q=${searchTerm}`)).data;
  return res;
}
