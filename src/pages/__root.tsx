import { CssBaseline, CssVarsProvider } from "@mui/joy";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: App,
});
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CssVarsProvider>
        <CssBaseline />
        <Navbar />
        <Outlet />
      </CssVarsProvider>
    </QueryClientProvider>
  );
}

export default App;
