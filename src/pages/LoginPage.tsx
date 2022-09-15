import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "../components/forms/SignUpForm";
import { SignInForm } from "../components/forms/SignInForm";
import { Button, Card } from "@mui/material";

export const LoginPage = () => {
  async function signInWithGithub() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) alert("Error: " + error);
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert("Error: " + error);
  }

  // used to redirect to homepage after login just for demo user
  let navigate = useNavigate();

  async function signInDemoUser() {
    const { error } = await supabase.auth.signInWithPassword({
      email: `${process.env.REACT_APP_SUPABASE_DEMO_USER_EMAIL}`,
      password: `${process.env.REACT_APP_SUPABASE_DEMO_USER_PASSWORD}`,
    });
    if (error) alert("Error: " + error.message);
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <Button variant="contained" onClick={signInDemoUser}>
        {" "}
        sign in demo user
      </Button>
      <SignUpForm />
      <SignInForm />
      <Card style={styles.card}>
        <Button
          sx={styles.button}
          variant="contained"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Card>
      <Card sx={styles.card}>
        <Button
          sx={styles.button}
          variant="contained"
          onClick={signInWithGithub}
        >
          Sign in with Github
        </Button>
      </Card>{" "}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    justifyItems: "center",
    gap: "2rem",
  },
  card: {
    width: "90%",
    height: "4rem",
    borderRadius: "20px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.38)",
  },
  button: {
    width: "100%",
    height: "100%",
    fontSize: "1.5rem",
    borderRadius: "20px",
    backgroundColor: "secondary.main",
    color: "primary.main",
    "&:hover": {
      backgroundColor: "secondary.dark",
    },
  },
} as const;
