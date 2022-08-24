import { FC } from "react";
import { Paper, Box } from "@mui/material";

interface Props {
  totalPurchasesAmount: number;
  necessaryPurchasesAmount: number;
  wantsPurchasesAmount: number;
}

export const PurchaseTotals: FC<Props> = ({
  totalPurchasesAmount,
  necessaryPurchasesAmount,
  wantsPurchasesAmount,
}) => {
  return (
    <Box sx={styles.purchaseTotalsContainer}>
      <Paper sx={styles.paper}>
        Total purchases amount: <div>${totalPurchasesAmount.toFixed(2)}</div>
      </Paper>
      <Paper sx={styles.paper}>
        Necessary purchases amount:{" "}
        <div>${necessaryPurchasesAmount.toFixed(2)} </div>
      </Paper>
      <Paper sx={styles.paper}>
        Wants purchases amount: <div>${wantsPurchasesAmount.toFixed(2)} </div>
      </Paper>
    </Box>
  );
};

const styles = {
  purchaseTotalsContainer: {
    display: { xs: "grid", md: "flex" },
    gap: "3rem",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "2rem",
  },

  paper: {
    padding: { xs: "1rem 3rem", md: "1rem" },
    backgroundColor: "secondary.main",
    color: "#404040",
    display: "grid",
  },
} as const;
