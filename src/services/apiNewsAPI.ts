import axios from "axios";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;
const NewsApi = axios.create({
  baseURL: `${import.meta.env.VITE_NEWS_API_BASE_URL}`,
});
export default NewsApi;

export async function getNews({ searchTerm = "" }: { searchTerm: string }) {
  const res = (
    await NewsApi.get(
      `/everything?apiKey=${apiKey}&q=${searchTerm}&sortBy=popularity`
    )
  ).data;
  return res;
}
export async function getTopHeadLines() {
  const res = (await NewsApi.get(`/top-headlines/sources?apiKey=${apiKey}`))
    .data;
  return res;
}
