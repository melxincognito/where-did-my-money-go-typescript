import { FC, Fragment } from "react";
import { Purchase } from "../../Interfaces";
import { Box } from "@mui/material";
import { PurchaseTile } from "../PurchaseTile";
import { useAppSelector } from "../../redux/hooks";
import { housingPurchasesCount } from "../../redux/reducers/purchase-totals/housingTotalReducer";
import { transportationPurchasesCount } from "../../redux/reducers/purchase-totals/transportationTotalReducer";
import { medicalPurchasesCount } from "../../redux/reducers/purchase-totals/medicalTotalReducer";
import { foodPurchasesCount } from "../../redux/reducers/purchase-totals/foodTotalReducer";
import { entertainmentPurchasesCount } from "../../redux/reducers/purchase-totals/entertainmentTotalReducer";
import { petsPurchasesCount } from "../../redux/reducers/purchase-totals/petsTotalReducer";
import { otherPurchasesCount } from "../../redux/reducers/purchase-totals/otherTotalReducer";

interface PurchaseCategoriesListProps {
  housingPurchasesList: Purchase[];
  transportationPurchasesList: Purchase[];
  medicalPurchasesList: Purchase[];
  foodPurchasesList: Purchase[];
  entertainmentPurchasesList: Purchase[];
  petsPurchasesList: Purchase[];
  otherPurchasesList: Purchase[];

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
  children?: React.ReactNode;
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
          <h1 style={styles.purchaseCategoryTileLabel}>
            {purchaseCategory} Purchases
          </h1>
          <h3>${purchaseCategoryTotal.toFixed(2)}</h3>
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

  deletePurchase,
}) => {
  const housingPurchaseTotal: number = useAppSelector(housingPurchasesCount);
  const transportationPurchaseTotal: number = useAppSelector(
    transportationPurchasesCount
  );
  const medicalPurchaseTotal: number = useAppSelector(medicalPurchasesCount);
  const foodPurchaseTotal: number = useAppSelector(foodPurchasesCount);
  const entertainmentPurchaseTotal: number = useAppSelector(
    entertainmentPurchasesCount
  );
  const petsPurchaseTotal: number = useAppSelector(petsPurchasesCount);
  const otherPurchaseTotal: number = useAppSelector(otherPurchasesCount);

  const purchaseCategories: PurchaseCategoriesInformation[] = [
    {
      purchaseCategory: "Housing",
      purchaseCategoryTotal: housingPurchaseTotal,
      purchaseCategoryList: housingPurchasesList,
    },
    {
      purchaseCategory: "Transportation",
      purchaseCategoryTotal: transportationPurchaseTotal,
      purchaseCategoryList: transportationPurchasesList,
    },
    {
      purchaseCategory: "Medical",
      purchaseCategoryTotal: medicalPurchaseTotal,
      purchaseCategoryList: medicalPurchasesList,
    },
    {
      purchaseCategory: "Food",
      purchaseCategoryTotal: foodPurchaseTotal,
      purchaseCategoryList: foodPurchasesList,
    },
    {
      purchaseCategory: "Entertainment",
      purchaseCategoryTotal: entertainmentPurchaseTotal,
      purchaseCategoryList: entertainmentPurchasesList,
    },
    {
      purchaseCategory: "Pets",
      purchaseCategoryTotal: petsPurchaseTotal,
      purchaseCategoryList: petsPurchasesList,
    },
    {
      purchaseCategory: "Other",
      purchaseCategoryTotal: otherPurchaseTotal,
      purchaseCategoryList: otherPurchasesList,
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
    width: { xs: "23rem", md: "30rem" },
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
  purchaseCategoryTileLabel: {
    textDecoration: "underline",
  },
} as const;
