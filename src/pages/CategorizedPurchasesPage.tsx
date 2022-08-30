import { Box } from "@mui/material";
import { FC } from "react";
import { PurchaseCategoriesList } from "../components/lists/PurchaseCategoriesList";

export const CategorizedPurchasesPage: FC = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <PurchaseCategoriesList />
    </Box>
  );
};
