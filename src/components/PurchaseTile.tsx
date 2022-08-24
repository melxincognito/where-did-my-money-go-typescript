import { FC } from "react";

export interface Props {
  id: string;
  name: string;
  amount: number;
  isNecessity: boolean;
  deletePurchase: (id: string) => void;
}

export const PurchaseTile: FC<Props> = ({
  id,
  name,
  amount,
  isNecessity,
  deletePurchase,
}) => {
  return (
    <div style={styles.purchaseTile}>
      <h1>{name}</h1>
      <h2>${amount}</h2>
      {isNecessity ? <> Necessity </> : <> Want </>}
      <button onClick={() => deletePurchase(id)}>delete</button>
    </div>
  );
};

const styles = {
  purchaseTile: {
    width: "200px",
    height: "200px",
    backgroundColor: "pink",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
} as const;
