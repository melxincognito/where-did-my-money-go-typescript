import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";
import {
  TextField,
  Card,
  Button,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

export const SignInForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  let navigate = useNavigate();
  async function signInWithEmail(e: any) {
    e.preventDefault();
    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: `${email}`,
        password: `${password}`,
      });
      if (error) alert("Error: " + error.message);
      else {
        navigate("/");
      }
    }
  }

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) alert("Error: " + error);
  }

  async function signInDemoUser() {
    const { error } = await supabase.auth.signInWithPassword({
      email: `${process.env.REACT_APP_SUPABASE_DEMO_USER_EMAIL}`,
      password: `${process.env.REACT_APP_SUPABASE_DEMO_USER_PASSWORD}`,
    });
    if (error) alert("Error: " + error.message);
    navigate("/");
  }

  return (
    <>
      <Card sx={styles.card}>
        {" "}
        <Box>
          <h3> Sign into your account</h3>
        </Box>
        <form onSubmit={signInWithEmail} style={styles.form}>
          <TextField
            value={email}
            variant="standard"
            label="Sign in email"
            InputLabelProps={{ shrink: true }}
            InputProps={{ disableUnderline: true }}
            sx={styles.textField}
            placeholder="email@gmail.com"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            value={password}
            variant="standard"
            label="Sign in password"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <VisibilityIcon sx={styles.visibilityIcon} />
                    ) : (
                      <VisibilityOffIcon sx={styles.visibilityIcon} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="P@ssword123"
            type={showPassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            sx={styles.textField}
          />

          <Button variant="contained" type="submit" sx={styles.button}>
            Sign in using Email
          </Button>
        </form>
        <button onClick={signInWithGoogle} style={styles.linkButton}>
          {" "}
          Sign in with Google
        </button>
        <button onClick={signInDemoUser} style={styles.linkButton}>
          Sign in with demo account
        </button>
      </Card>
    </>
  );
};

const styles = {
  card: {
    display: "grid",
    width: { xs: "80%", md: "50%" },
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
    gap: "1rem",
    height: "fit-content",
  },
  form: {
    display: "grid",
    gap: "2.4rem",
  },

  textField: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
    padding: 0.12,
    paddingBottom: "0.55rem",
    paddingLeft: "1.1rem",
    "& label": { paddingLeft: "1rem", fontWeight: "bold" },
  },
  visibilityIcon: {
    color: "black",
  },
  button: {
    padding: "0.7rem",
    borderRadius: "20px",
    border: "2px solid black",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.13)",
      backdropFilter: "blur(5px)",
      boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
      border: "2px solid rgba(255, 255, 255, 0.17)",
      color: "black",
    },
  },
  linkButton: {
    background: "transparent",
    border: " none",
    padding: "0!important",
    color: "#069",
    textDecoration: "underline",
    cursor: "pointer",
  },
} as const;
