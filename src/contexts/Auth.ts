import { createContext } from "react";

interface AuthContextProps {
  userLoggedIn: boolean | null;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const authContextInitialState = {
  userLoggedIn: null,
  setUserLoggedIn: () => {},
};

export const AuthContext = createContext<AuthContextProps>(
  authContextInitialState
);
