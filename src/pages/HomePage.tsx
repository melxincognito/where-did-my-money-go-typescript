import { FC } from "react";
import { PurchaseTotals } from "../components/purchases/PurchaseTotals";
import { SupabasePurchaseInputForm } from "../components/forms/SupabasePurchaseInputForm";
import { SupabasePurchasesList } from "../components/lists/SupabasePurchasesList";
import { Box } from "@mui/material";

export const HomePage: FC = () => {
  return (
    <>
      {/* PURCHASE INPUT FORM AND TOTALS */}
      <Box sx={styles.purchaseInputFormAndTotalsContainer}>
        <SupabasePurchaseInputForm />
        <PurchaseTotals />
      </Box>

      {/* PURCHASE LIST */}

      <SupabasePurchasesList />
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
