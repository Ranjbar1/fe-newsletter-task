import { Sheet } from "@mui/joy";
import { createFileRoute } from "@tanstack/react-router";
import { useGetNews } from "../hooks/useGuardianApi";

export const Route = createFileRoute("/")({
  component: Home,
});
function Home() {
  const searchParams = Route.useSearch();

  const { GuardianNews } = useGetNews({
    searchTerm: searchParams.searchFor as string,
    categories: searchParams.categoryList,
    enabled: Boolean(searchParams.sourceList.includes("The Guardian")),
  });

  return <Sheet sx={{ display: "" }}>{JSON.stringify(GuardianNews)}</Sheet>;
}
