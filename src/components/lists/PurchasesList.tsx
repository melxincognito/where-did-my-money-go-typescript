import { FC, Fragment } from "react";

import { PurchaseTile } from "../PurchaseTile";

import { allPurchasesState } from "../../redux/reducers/purchase-states/allPurchases";

import { useAppSelector } from "../../redux/hooks";

interface Props {
  deletePurchase: (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ) => void;
}

// currently doesn't delete purchases

export const PurchasesList: FC<Props> = ({ deletePurchase }) => {
  const allPurchases: Array<{
    purchase: string;
    amount: number;
    isNecessity: boolean;
    id: string;
    category: string;
  }> = useAppSelector(allPurchasesState);

  return (
    <div style={styles.purchasesList}>
      <h1 style={styles.allPurchasesHeader}> All Purchases</h1>
      <div style={styles.purchases}>
        {allPurchases.map((purchase, index) => (
          <Fragment key={index}>
            <PurchaseTile
              category={purchase.category}
              id={purchase.id}
              name={purchase.purchase}
              amount={purchase.amount}
              isNecessity={purchase.isNecessity}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

const styles = {
  purchasesList: {
    display: "grid",
    backgroundColor: "pink",
    margin: "1rem",
    borderRadius: "30px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    justifyContent: "center",
    height: "32vh",
    overflow: "scroll",
    paddingBottom: "2rem",
  },
  purchases: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  allPurchasesHeader: {
    textDecoration: "underline",
  },
} as const;
