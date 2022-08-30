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
        <h3 style={styles.textStyle}>
          Total purchases amount: <span>${totalCount.toFixed(2)}</span>
        </h3>
      </Paper>
      <Paper sx={styles.paper}>
        <h3 style={styles.textStyle}>
          Necessary purchases amount: <span>${necessaryCount.toFixed(2)} </span>
        </h3>
      </Paper>
      <Paper sx={styles.paper}>
        <h3 style={styles.textStyle}>
          Wants purchases amount: <span>${wantsCount.toFixed(2)} </span>
        </h3>
      </Paper>
    </Box>
  );
};

const styles = {
  purchaseTotalsContainer: {
    display: "grid",
    gap: "3rem",
    justifyContent: "center",
    alignContent: "center",
    marginTop: "2rem",
    width: { xs: "100%", md: "50%" },
  },
  paper: {
    padding: { xs: "0 3rem", md: "0 3rem" },
    color: "white",
    background:
      "radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%), radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%)",
  },
  textStyle: {
    display: "grid",
  },
} as const;

/*

 background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
                radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
*/
