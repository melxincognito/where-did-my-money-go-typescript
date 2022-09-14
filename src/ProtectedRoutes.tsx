import { useContext, useEffect } from "react";
import { AuthContext } from "./contexts/Auth";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

export function ProtectedRoutes({ children }: Props) {
  const { userLoggedIn, setUserLoggedIn } = useContext(AuthContext);
  let navigate = useNavigate();

  useEffect(() => {
    const session = supabase.auth.getSession();

    session.then((res) => {
      const sessionData = res.data;

      if (sessionData.session !== null) {
        setUserLoggedIn(true);
        return userLoggedIn;
      } else {
        return navigate(`/login`);
      }
    });
  }, [userLoggedIn, setUserLoggedIn, navigate]);

  return (
    <AuthContext.Provider value={userLoggedIn}>{children}</AuthContext.Provider>
  );
}
