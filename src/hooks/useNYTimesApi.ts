import { useQuery } from "@tanstack/react-query";
import { getNYTBlogs } from "../services/apiNYTimesAPI";

export function useNYTimesNews({
  searchTerm,
  enabled,
}: {
  searchTerm: string;
  enabled: boolean;
}) {
  const { data: NYTNews, isLoading: isNYTNewsLoading } = useQuery({
    queryKey: ["news/NYT", searchTerm],
    queryFn: () => getNYTBlogs({ searchTerm }),
    enabled,
  });
  return { NYTNews, isNYTNewsLoading };
}
