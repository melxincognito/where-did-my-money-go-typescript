import { FC } from "react";

import { Box, Button } from "@mui/material";

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
    <Box sx={styles.purchaseTile} id={category}>
      <div style={styles.headerContent}>
        <h2 style={styles.purchaseNameFontTag}>
          <span aria-label="Purchase name">{name}</span>
        </h2>{" "}
        <h3 style={styles.purchaseAmountFontTag}>
          <span aria-label="Purchase amount"> ${amount.toFixed(2)} </span>
        </h3>{" "}
      </div>

      {isNecessity ? (
        <div style={styles.necessaryPurchaseTile}> Necessary Purchase </div>
      ) : (
        <div style={styles.wantsPurchaseTile}> Wants Purchase </div>
      )}
      <Button
        sx={styles.deletePurchaseButton}
        aria-label="Delete purchase"
        variant="contained"
        onClick={() => deletePurchase(id, amount, isNecessity)}
      >
        delete
      </Button>
    </Box>
  );
};

const styles = {
  purchaseTile: {
    width: { xs: "200px", md: "300px" },
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
  necessaryPurchaseTile: {
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    marginBottom: "5px",
    padding: "0.1rem 1rem",
    borderRadius: "30px",
  },
  wantsPurchaseTile: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    marginBottom: "5px",
    padding: "0.1rem 1rem",
    borderRadius: "30px",
  },
  purchaseNameFontTag: {
    color: "#2D023F",
  },
  purchaseAmountFontTag: {
    color: "white",
    textDecoration: "underline",
  },
  deletePurchaseButton: {
    borderRadius: "30px",
  },
} as const;
