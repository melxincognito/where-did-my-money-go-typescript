import { FC } from "react";
import { Purchase } from "../Interfaces";
import { Box } from "@mui/material";
import { PurchaseTile } from "./PurchaseTile";

interface PurchaseCategoriesListProps {
  housingPurchasesList: Purchase[];
  transportationPurchasesList: Purchase[];
  medicalPurchasesList: Purchase[];
  foodPurchasesList: Purchase[];
  entertainmentPurchasesList: Purchase[];
  petsPurchasesList: Purchase[];
  otherPurchasesList: Purchase[];
  housingPurchasesTotal: number;
  transportationPurchasesTotal: number;
  medicalPurchasesTotal: number;
  foodPurchasesTotal: number;
  entertainmentPurchasesTotal: number;
  petsPurchasesTotal: number;
  otherPurchasesTotal: number;
  deletePurchase: (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ) => void;
}

interface PurchaseCategoriesTileProps {
  purchaseCategory: string;
  purchaseCategoryTotal: number;
  children?: any;
}

interface PurchaseCategoriesInformation {
  purchaseCategory: string;
  purchaseCategoryTotal: number;
  purchaseCategoryList: Purchase[];
}

const PurchaseCategoriesTile: FC<PurchaseCategoriesTileProps> = ({
  purchaseCategory,
  purchaseCategoryTotal,
  children,
}) => {
  return (
    <div>
      <Box sx={styles.purchaseCategoryTile}>
        <div style={styles.purchaseCategoryTileHeader}>
          <h1>{purchaseCategory} Purchases</h1>
          <h3>${purchaseCategoryTotal}</h3>
        </div>

        {children}
      </Box>
    </div>
  );
};

export const PurchaseCategoriesList: FC<PurchaseCategoriesListProps> = ({
  housingPurchasesList,
  transportationPurchasesList,
  medicalPurchasesList,
  foodPurchasesList,
  entertainmentPurchasesList,
  petsPurchasesList,
  otherPurchasesList,
  housingPurchasesTotal,
  transportationPurchasesTotal,
  medicalPurchasesTotal,
  foodPurchasesTotal,
  entertainmentPurchasesTotal,
  petsPurchasesTotal,
  otherPurchasesTotal,
  deletePurchase,
}) => {
  const housingPurchaseCategories: PurchaseCategoriesInformation[] = [
    {
      purchaseCategory: "Housing",
      purchaseCategoryTotal: housingPurchasesTotal,
      purchaseCategoryList: housingPurchasesList,
    },
    {
      purchaseCategory: "Transportation",
      purchaseCategoryTotal: transportationPurchasesTotal,
      purchaseCategoryList: transportationPurchasesList,
    },
    {
      purchaseCategory: "Medical",
      purchaseCategoryTotal: medicalPurchasesTotal,
      purchaseCategoryList: medicalPurchasesList,
    },
    {
      purchaseCategory: "Food",
      purchaseCategoryTotal: foodPurchasesTotal,
      purchaseCategoryList: foodPurchasesList,
    },
    {
      purchaseCategory: "Entertainment",
      purchaseCategoryTotal: entertainmentPurchasesTotal,
      purchaseCategoryList: entertainmentPurchasesList,
    },
    {
      purchaseCategory: "Pets",
      purchaseCategoryTotal: petsPurchasesTotal,
      purchaseCategoryList: petsPurchasesList,
    },
    {
      purchaseCategory: "Other",
      purchaseCategoryTotal: otherPurchasesTotal,
      purchaseCategoryList: otherPurchasesList,
    },
  ];

  return (
    <Box id="purchase categories list" sx={styles.purchaseCategoryContainer}>
      {housingPurchaseCategories.map((purchaseCategory, index) => (
        <PurchaseCategoriesTile
          key={index}
          purchaseCategory={purchaseCategory.purchaseCategory}
          purchaseCategoryTotal={purchaseCategory.purchaseCategoryTotal}
        >
          {purchaseCategory.purchaseCategoryList.map((purchase, index) => (
            <>
              <PurchaseTile
                key={index}
                category={purchase.category}
                id={purchase.id}
                name={purchase.purchase}
                amount={purchase.amount}
                isNecessity={purchase.isNecessity}
                deletePurchase={() =>
                  deletePurchase(
                    purchase.id,
                    purchase.amount,
                    purchase.isNecessity,
                    purchase.category
                  )
                }
              />
            </>
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
    width: { xs: "20rem", md: "30rem" },
    height: "400px",
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
} as const;
