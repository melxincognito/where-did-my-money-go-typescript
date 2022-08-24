import { FC } from "react";

import { Button } from "@mui/material";

export interface Props {
  id: string;
  name: string;
  amount: number;
  isNecessity: boolean;
  category: string;
  deletePurchase: (id: string, amount: number, isNecessity: boolean) => void;
}

export const PurchaseTile: FC<Props> = ({
  id,
  name,
  amount,
  isNecessity,
  deletePurchase,
  category,
}) => {
  return (
    <div style={styles.purchaseTile} id={category}>
      <div style={styles.headerContent}>
        <h2 style={{ color: "#2D023F" }}>{name}</h2>{" "}
        <h3 style={{ color: "white", textDecoration: "underline" }}>
          <span> ${amount} </span>
        </h3>{" "}
      </div>

      {isNecessity ? (
        <div
          style={{
            color: "black",
            backgroundColor: "rgba(255, 255, 255, 0.88)",
            marginBottom: "5px",
            padding: "0.1rem 1rem",
            borderRadius: "30px",
          }}
        >
          {" "}
          Necessary Purchase{" "}
        </div>
      ) : (
        <div
          style={{
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            marginBottom: "5px",
            padding: "0.1rem 1rem",
            borderRadius: "30px",
          }}
        >
          {" "}
          Wants Purchase{" "}
        </div>
      )}
      <Button
        sx={{ borderRadius: "30px" }}
        variant="contained"
        onClick={() => deletePurchase(id, amount, isNecessity)}
      >
        delete
      </Button>
    </div>
  );
};

const styles = {
  purchaseTile: {
    width: "300px",
    height: "10rem",
    backgroundColor: "palevioletred",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    padding: "1.5rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "20px",
  },
  headerContent: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  },
} as const;
