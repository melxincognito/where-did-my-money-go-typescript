import { FC } from "react";

import { PurchasesList } from "../components/lists/PurchasesList";
import { PurchaseTotals } from "../components/purchases/PurchaseTotals";
import { PurchaseInputForm } from "../components/forms/PurchaseInputForm";

import { Box } from "@mui/material";

export const HomePage: FC = () => {
  return (
    <>
      {/* PURCHASE INPUT FORM AND TOTALS */}
      <Box sx={styles.purchaseInputFormAndTotalsContainer}>
        <PurchaseInputForm />
        <PurchaseTotals />
      </Box>

      {/* PURCHASE LIST */}

      <PurchasesList />
    </>
  );
};

const styles = {
  purchaseInputFormAndTotalsContainer: {
    display: { xs: "grid", md: "flex" },
    justifyContent: "center",
    justifyItems: "center",
    marginBottom: "3rem",
    width: "100%",
  },
} as const;
