import { FC } from "react";
import { Box } from "@mui/material";

export interface Props {}

export const Navigation: FC<Props> = () => {
  return (
    <Box sx={styles.navBarContainer}>
      <h1> Where did my money go?</h1>
    </Box>
  );
};

const styles = {
  navBarContainer: {
    left: 0,
    right: 0,
    top: 0,
    height: { xs: "14vh", md: "10vh" },
    width: "100%",
    backgroundColor: "#191919",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.71)",
    marginBottom: "5rem",
    color: "white",
    justifyContent: "center",
    textDecoration: "underline",
  },
} as const;
