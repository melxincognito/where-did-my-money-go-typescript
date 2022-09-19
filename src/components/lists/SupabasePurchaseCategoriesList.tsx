import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { PurchaseTile } from "../purchases/PurchaseTile";

import { useSupabasePurchaseCategoriesList } from "../../hooks/useSupabasePurchaseCategoriesList";

import { useSupabasePurchaseCategoryTotalsCalculator } from "../../hooks/useSupabasePurchaseCategoryTotalsCalculator";

interface PurchaseCategoriesTileProps {
  purchaseCategory: string;
  purchaseCategoryTotal: number;
  children?: React.ReactNode;
}

interface PurchaseCategoriesInformation {
  purchaseCategory: string;
  purchaseCategoryTotal: number;
  purchaseCategoryList: any[];
}

interface PurchaseCategoriesTileProps {
  purchaseCategory: string;
  purchaseCategoryTotal: number;
  children?: React.ReactNode;
}

const PurchaseCategoriesTile: FC<PurchaseCategoriesTileProps> = ({
  purchaseCategory,
  purchaseCategoryTotal,
  children,
}) => {
  const purchaseCategoryTotalFormatted = purchaseCategoryTotal
    ? purchaseCategoryTotal.toFixed(2)
    : 0;

  return (
    <div>
      <Box sx={styles.purchaseCategoryTile}>
        <div style={styles.purchaseCategoryTileHeader}>
          <h1 style={styles.purchaseCategoryTileLabel}>
            {purchaseCategory} Purchases
          </h1>
          <h3>${purchaseCategoryTotalFormatted}</h3>
        </div>

        {children}
      </Box>
    </div>
  );
};

export const SupabasePurchaseCategoriesList: FC = () => {
  const housingItemsList = useSupabasePurchaseCategoriesList({
    category: "Housing",
  });

  const transportationItemsList = useSupabasePurchaseCategoriesList({
    category: "Transportation",
  });

  const medicalItemsList = useSupabasePurchaseCategoriesList({
    category: "Medical",
  });

  const foodItemsList = useSupabasePurchaseCategoriesList({
    category: "Food",
  });

  const entertainmentItemsList = useSupabasePurchaseCategoriesList({
    category: "Entertainment",
  });

  const petsItemsList = useSupabasePurchaseCategoriesList({
    category: "Pets",
  });

  const otherItemsList = useSupabasePurchaseCategoriesList({
    category: "Other",
  });

  const housingTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Housing",
  });

  const transportationTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Transportation",
  });

  const medicalTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Medical",
  });

  const foodTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Food",
  });

  const entertainmentTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Entertainment",
  });

  const petsTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Pets",
  });

  const otherTotal = useSupabasePurchaseCategoryTotalsCalculator({
    category: "Other",
  });

  const purchaseCategories: PurchaseCategoriesInformation[] = [
    {
      purchaseCategory: "Housing",
      purchaseCategoryTotal: housingTotal,
      purchaseCategoryList: housingItemsList,
    },
    {
      purchaseCategory: "Transportation",
      purchaseCategoryTotal: transportationTotal,
      purchaseCategoryList: transportationItemsList,
    },
    {
      purchaseCategory: "Medical",
      purchaseCategoryTotal: medicalTotal,
      purchaseCategoryList: medicalItemsList,
    },
    {
      purchaseCategory: "Food",
      purchaseCategoryTotal: foodTotal,
      purchaseCategoryList: foodItemsList,
    },
    {
      purchaseCategory: "Entertainment",
      purchaseCategoryTotal: entertainmentTotal,
      purchaseCategoryList: entertainmentItemsList,
    },
    {
      purchaseCategory: "Pets",
      purchaseCategoryTotal: petsTotal,
      purchaseCategoryList: petsItemsList,
    },
    {
      purchaseCategory: "Other",
      purchaseCategoryTotal: otherTotal,
      purchaseCategoryList: otherItemsList,
    },
  ];

  return (
    <Box id="purchaseCategoriesList" sx={styles.purchaseCategoryContainer}>
      {purchaseCategories.map((purchaseCategory, index) => (
        <PurchaseCategoriesTile
          key={index}
          purchaseCategory={purchaseCategory.purchaseCategory}
          purchaseCategoryTotal={purchaseCategory.purchaseCategoryTotal}
        >
          {purchaseCategory.purchaseCategoryList.map((purchase, index) => (
            <Fragment key={index}>
              <PurchaseTile
                category={purchase.purchase_category}
                id={purchase.id}
                name={purchase.purchase_name}
                amount={purchase.purchase_amount}
                isNecessity={purchase.necessary_purchase}
                date={purchase.created_at}
              />
            </Fragment>
          ))}
        </PurchaseCategoriesTile>
      ))}
    </Box>
  );
};

const styles = {
  purchaseCategoryContainer: {
    display: { xs: "grid", md: "flex" },
    width: "100%",
    margin: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
    justifyItems: "center",
  },

  purchaseCategoryTile: {
    width: { xs: "23rem", md: "40rem" },
    height: { xs: "470px", md: "500px" },
    backgroundColor: "#141414",
    display: "grid",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "scroll",
    gap: "1rem",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "30px",
    paddingBottom: "1rem",
    textAlign: "center",
  },
  purchaseCategoryTileHeader: {
    color: "white",
    display: "block",
    justifyContent: "center",
    justifyItems: "center",
  },
  purchaseCategoryTileLabel: {
    textDecoration: "underline",
  },
} as const;
