import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Records from "./pages/records/Records";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to="dashboard" />,
    },
    {
      path: "dashboard",
      element: <Dashboard />,
    },
    {
      path: "records",
      element: <Records />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
