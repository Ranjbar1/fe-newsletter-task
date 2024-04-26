import { useQuery } from "@tanstack/react-query";
import { getNews } from "../services/apiNewsAPI";

export function useNews({
  searchTerm,
  enabled,
}: {
  searchTerm: string;
  enabled: boolean;
}) {
  const { data: News, isLoading: isNewsLoading } = useQuery({
    queryKey: ["news/NewsApi", searchTerm],
    queryFn: () => getNews({ searchTerm }),
    enabled,
  });
  return { News, isNewsLoading };
}
