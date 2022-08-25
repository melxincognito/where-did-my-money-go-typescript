import { FC } from "react";

import { PurchaseTile } from "../PurchaseTile";

import { Purchase } from "../../Interfaces";

interface Props {
  purchases: Purchase[];
  deletePurchase: (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ) => void;
}

export const PurchasesList: FC<Props> = ({ purchases, deletePurchase }) => {
  return (
    <div style={styles.purchasesList}>
      <h1> All Purchases</h1>
      <div style={styles.purchases}>
        {purchases.map((purchase, index) => (
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
} as const;
