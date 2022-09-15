import { useState, forwardRef, Ref } from "react";
import { supabase } from "../../supabaseClient";
import {
  TextField,
  Card,
  Button,
  InputAdornment,
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Slide,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { TransitionProps } from "@mui/material/transitions";

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SignUpForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [openConfirmSignupDialog, setOpenConfirmSignupDialog] = useState(false);

  function checkFieldsFilled() {
    return email === "" || password === "" || confirmPassword === "";
  }

  function checkPasswordMatch(password1: string, password2: string) {
    return password1 === password2;
  }

  function resetForm() {
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  }

  const handleClickOpenConfirmSignupDialog = () => {
    setOpenConfirmSignupDialog(true);
  };

  const handleCloseConfirmSignupDialog = () => {
    setOpenConfirmSignupDialog(false);
    resetForm();
  };

  async function signUpWithEmail(e: any) {
    e.preventDefault();
    if (checkFieldsFilled()) {
      alert("Please fill in all fields");
      return;
    } else if (!checkPasswordMatch(password, confirmPassword)) {
      alert("Passwords do not match");
      return;
    } else {
      const { error } = await supabase.auth.signUp({
        email: `${email}`,
        password: `${password}`,
      });

      if (error) alert("Error: " + error.message);
      handleClickOpenConfirmSignupDialog();
    }
  }
  return (
    <>
      <Card sx={styles.card}>
        {" "}
        <Box>
          <h3> Sign up using email & password</h3>
        </Box>
        <form onSubmit={signUpWithEmail} style={styles.form}>
          <TextField
            value={email}
            variant="standard"
            label="Sign up email"
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
            label="Sign up password"
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
          <TextField
            value={confirmPassword}
            variant="standard"
            label="Confirm sign up password"
            InputLabelProps={{ shrink: true }}
            InputProps={{
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="start">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <VisibilityIcon sx={styles.visibilityIcon} />
                    ) : (
                      <VisibilityOffIcon sx={styles.visibilityIcon} />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            placeholder="P@ssword123"
            type={showConfirmPassword ? "text" : "password"}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={styles.textField}
          />
          <Button variant="contained" type="submit" sx={styles.button}>
            Sign up
          </Button>
        </form>
      </Card>
      <Dialog
        open={openConfirmSignupDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseConfirmSignupDialog}
        aria-describedby="confirm-signup-dialog"
      >
        <DialogTitle>{"Sign up successful!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Check your email at {email} to confirm your account.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmSignupDialog}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles = {
  card: {
    display: "grid",
    width: "50%",
    padding: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
    gap: "1rem",
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
    paddingLeft: "1.1rem",
    paddingBottom: "0.5rem",
    display: "flex",
    alignContent: "center",
    "& label": {
      paddingLeft: "1rem",
      position: "absolute",
      top: "-1.4rem",
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
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
} as const;
