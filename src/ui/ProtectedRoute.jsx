import { useNavigate } from "react-router-dom";
import { useUser } from "../pages/login/useUser";
import Spinner from "./Spinner";
import { useEffect } from "react";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load the authenticated user
  const { isLoading, isAuthenticated } = useUser();

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, navigate, isLoading],
  );

  // 2. While loading, show a spinner
  if (isLoading)
    return (
      <div className="flex h-[100vh] items-center justify-center bg-white">
        <Spinner />
      </div>
    );

  // 3. If there is NO authenticated user, redirect to the /login
  // 4. If there IS a user, render the app

  if (isAuthenticated) return children;
}

export default ProtectedRoute;
