import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Monthly from "./pages/monthly/Monthly";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools/production";
import Annual from "./pages/annual/Annual";
import Login from "./pages/login/Login";
import ProtectedRoute from "./ui/ProtectedRoute";
import Signup from "./pages/signup/Signup";

const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate replace to="dashboard" />,
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "monthly",
      element: (
        <ProtectedRoute>
          <Monthly />
        </ProtectedRoute>
      ),
    },
    {
      path: "annual",
      element: (
        <ProtectedRoute>
          <Annual />
        </ProtectedRoute>
      ),
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "signup",
      element: <Signup />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
