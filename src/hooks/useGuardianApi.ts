import { useQuery } from "@tanstack/react-query";
import { getGuardianBlogs } from "../services/apiGuardianAPI";

export function useGetNews({
  searchTerm,
  categories,
  enabled,
}: {
  searchTerm: string;
  categories: string[];
  enabled: boolean;
}) {
  const { data: GuardianNews, isLoading: isGuardianNewsLoading } = useQuery({
    queryKey: ["news/guardian", searchTerm, ...categories],
    queryFn: () => getGuardianBlogs({ searchTerm, categories }),
    enabled,
  });
  return { GuardianNews, isGuardianNewsLoading };
}
