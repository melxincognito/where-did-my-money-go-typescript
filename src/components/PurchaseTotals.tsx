import { FC } from "react";
import { Paper, Box } from "@mui/material";
import { useAppSelector } from "../redux/hooks";

import { totalPurchasesCount } from "../redux/reducers/purchase-totals/purchaseTotalReducer";
import { necessaryPurchasesCount } from "../redux/reducers/purchase-totals/necessityTotalReducer";
import { wantsPurchasesCount } from "../redux/reducers/purchase-totals/wantsTotalReducer";

export const PurchaseTotals: FC = () => {
  const totalCount: number = useAppSelector(totalPurchasesCount);
  const necessaryCount: number = useAppSelector(necessaryPurchasesCount);
  const wantsCount: number = useAppSelector(wantsPurchasesCount);

  return (
    <Box sx={styles.purchaseTotalsContainer}>
      <Paper sx={styles.paper}>
        Total purchases amount: <span>${totalCount.toFixed(2)}</span>
      </Paper>
      <Paper sx={styles.paper}>
        Necessary purchases amount: <span>${necessaryCount.toFixed(2)} </span>
      </Paper>
      <Paper sx={styles.paper}>
        Wants purchases amount: <span>${wantsCount.toFixed(2)} </span>
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
