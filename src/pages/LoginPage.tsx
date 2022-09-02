import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfile } from "../components/authentication/UserProfile";

export const LoginPage: FC = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <button onClick={() => loginWithRedirect()}> Log in</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <button onClick={() => console.log(isAuthenticated)}>auth</button>
      <UserProfile />
    </div>
  );
};
