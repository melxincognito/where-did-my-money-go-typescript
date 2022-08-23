import { FC } from "react";

export interface Props {}

export const Navigation: FC<Props> = () => {
  return (
    <div style={styles.navBarContainer}>
      <nav>
        <ul style={styles.unorderedList}>
          <li style={styles.listItem}>
            <a>Home</a>{" "}
          </li>
          <li style={styles.listItem}>
            <a>Purchases Overview</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const styles = {
  navBarContainer: {
    left: 0,
    right: 0,
    top: 0,
    height: "10vh",
    width: "100%",
    backgroundColor: "purple",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.51)",
    marginBottom: "5rem",
  },
  unorderedList: {
    listStyle: "none",
    display: "flex",
    gap: "3rem",
  },

  listItem: {
    width: "10rem",
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "5px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.51)",
  },
} as const;
