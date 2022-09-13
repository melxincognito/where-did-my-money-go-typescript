import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { UserProfile } from "../components/authentication/UserProfile";
import { Button, Card } from "@mui/material";

import { ImageCarousel } from "../components/login/ImageCarousel";

export const LoginPage: FC = (): JSX.Element => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div style={{ display: "grid", justifyItems: "center" }}>
      <ImageCarousel />

      <Card
        sx={{
          width: "90%",
          height: "4rem",
          borderRadius: "20px",
          boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.38)",
        }}
      >
        <Button
          sx={{
            width: "100%",
            height: "100%",
            fontSize: "1.5rem",
            borderRadius: "20px",
            backgroundColor: "secondary.main",
            color: "primary.main",
            "&:hover": {
              backgroundColor: "secondary.dark",
            },
          }}
          variant="contained"
          onClick={() => loginWithRedirect()}
        >
          Login / Sign Up
        </Button>
      </Card>
      <UserProfile />
    </div>
  );
};
