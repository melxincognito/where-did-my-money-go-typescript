import { Box } from "@mui/material";
import { FC } from "react";
import { SupabasePurchaseCategoriesList } from "../components/lists/SupabasePurchaseCategoriesList";

export const CategorizedPurchasesPage: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <SupabasePurchaseCategoriesList />
    </Box>
  );
};
