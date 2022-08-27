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
    height: { xs: "17vh", md: "13vh" },
    width: "100%",
    backgroundColor: "#191919",
    display: "grid",
    alignContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.71)",
    marginBottom: "2rem",
    color: "white",
    justifyContent: "center",
  },
  list: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "flex-start",
    gap: "1rem",
    position: "relative",
    top: "-1.3rem",
  },
  listItem: {
    display: "inline",
    backgroundColor: "white",
    padding: "0.6rem 2.8rem",
    borderRadius: "5px",
  },
} as const;
