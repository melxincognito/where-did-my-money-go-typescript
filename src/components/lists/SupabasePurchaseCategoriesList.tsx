import { FC, Fragment } from "react";
import { Box } from "@mui/material";
import { PurchaseTile } from "../purchases/PurchaseTile";

import { useSupabasePurchaseCategoriesList } from "../../hooks/useSupabasePurchaseCategoriesList";

import { useSupabaseTotalsCalculator } from "../../hooks/useSupabaseTotalsCalculator";

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

  const total = useSupabaseTotalsCalculator({ isNecessary: true });

  const purchaseCategories: PurchaseCategoriesInformation[] = [
    {
      purchaseCategory: "Housing",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: housingItemsList,
    },
    {
      purchaseCategory: "Transportation",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: transportationItemsList,
    },
    {
      purchaseCategory: "Medical",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: medicalItemsList,
    },
    {
      purchaseCategory: "Food",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: foodItemsList,
    },
    {
      purchaseCategory: "Entertainment",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: entertainmentItemsList,
    },
    {
      purchaseCategory: "Pets",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: petsItemsList,
    },
    {
      purchaseCategory: "Other",
      purchaseCategoryTotal: 0,
      purchaseCategoryList: otherItemsList,
    },
  ];

  return (
    <Box id="purchaseCategoriesList" sx={styles.purchaseCategoryContainer}>
      <button onClick={() => console.log(total)}>c</button>
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
