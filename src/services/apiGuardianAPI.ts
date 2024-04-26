import axios from "axios";
const Guardian_BASE_URL = import.meta.env.VITE_GUARDIAN_BASE_URL;
const Guardian_API_KEY = import.meta.env.VITE_GUARDIAN_API_KEY;
const GuardianApi = axios.create({
  baseURL: `${Guardian_BASE_URL}?api-key=${Guardian_API_KEY}&`,
});
export default GuardianApi;

export async function getGuardianBlogs({
  searchTerm = "",
  categories,
}: {
  searchTerm: string;
  categories: string[];
}) {
  const category = categories.join("/");
  const res = (await GuardianApi.get(`?q=${searchTerm}&tag=${category}`)).data;
  return res;
}
