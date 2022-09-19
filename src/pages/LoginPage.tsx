import { SignUpForm } from "../components/forms/SignUpForm";
import { SignInForm } from "../components/forms/SignInForm";
import { Box, Paper } from "@mui/material";

function HeaderTile() {
  return (
    <Paper sx={styles.paper}>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <h2> Don't burn through money with poor financial decisions </h2>
        <h3> Keep track of your spending & keep more money in your wallet </h3>
        <h5> $$$ cha-ching $$$ </h5>
      </Box>
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <h4> Don't burn through money with poor financial decisions </h4>
        <h5> Keep track of your spending & keep more money in your wallet </h5>
        <p> $$$ cha-ching $$$ </p>
      </Box>
    </Paper>
  );
}

export const LoginPage = () => {
  const imageUrl = "https://images2.imgbox.com/90/ba/l1xOb4VO_o.jpg";

  return (
    <div>
      <Box
        className="header-login-form-container"
        sx={styles.headerLoginformContainer}
      >
        <Box
          className="header-intro-container"
          sx={styles.headerIntroContainer}
        >
          <img src={imageUrl} alt="puta" style={styles.image} />
          <HeaderTile />
        </Box>

        <Box
          className="login-signup-forms-container"
          sx={styles.loginSignupFormsContainer}
        >
          <SignInForm />
          <SignUpForm />
        </Box>
      </Box>
    </div>
  );
};

/*
  <Button variant="contained" onClick={signInDemoUser}>
        {" "}
        sign in demo user
      </Button>
      <SignInForm />
      <SignUpForm />
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
*/

const styles = {
  headerLoginformContainer: {
    display: { xs: "grid", md: "flex" },
    alignItems: "start",
    justifyContent: "center",
    justifyItems: "center",
    width: "100%",
  },
  image: {
    height: "80%",
    width: "80%",
    borderRadius: "20px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.51)",
  },
  paper: {
    background:
      "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
    position: "relative",
    top: { xs: "-1.5rem", md: "-3rem" },
    padding: { xs: "0 1rem", md: "0 2rem" },
    color: "white",
    borderRadius: "20px",
    margin: "0 3rem",
  },
  headerIntroContainer: {
    display: "grid",
    justifyItems: "center",
    width: { xs: "100%", md: "50%" },
  },
  loginSignupFormsContainer: {
    width: { xs: "100%", md: "50%" },
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
