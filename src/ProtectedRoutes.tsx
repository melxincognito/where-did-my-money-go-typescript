import { LoginPage } from "./pages/LoginPage";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function CheckUserAuthentication() {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated;
}

export default function ProtectedRoutes() {
  const isUserAuthenticated = CheckUserAuthentication();
  return isUserAuthenticated ? <Outlet /> : <LoginPage />;
}
