import { LoginPage } from "./pages/LoginPage";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export function CheckUserAuthentication(): boolean {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated;
}

export default function ProtectedRoutes(): JSX.Element {
  const isUserAuthenticated: boolean = CheckUserAuthentication();
  return isUserAuthenticated ? <Outlet /> : <LoginPage />;
}
