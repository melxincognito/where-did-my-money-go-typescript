import { FC } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

export interface Props {}

export const Navigation: FC<Props> = () => {
  return (
    <Box sx={styles.navBarContainer}>
      <h1> Where did my money go?</h1>
      <ul style={styles.list}>
        {" "}
        <li style={styles.listItem}>
          <Link to="/">Home</Link>
        </li>
        <li style={styles.listItem}>
          <Link to="/charts">Charts</Link>
        </li>
      </ul>
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
  list: {
    listStyleType: "none",
    display: "flex",
    gap: "1rem",
  },
  listItem: {
    display: "inline",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "5px",
  },
} as const;
