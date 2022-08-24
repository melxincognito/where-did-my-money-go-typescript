import { FC } from "react";

import { Button } from "@mui/material";

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
      <div style={styles.headerContent}>
        <h2>{name}</h2> - <h3>${amount}</h3>{" "}
      </div>

      {isNecessity ? <> Necessary Purchase </> : <> Wants Purchase </>}
      <Button variant="contained" onClick={() => deletePurchase(id)}>
        delete
      </Button>
    </div>
  );
};

const styles = {
  purchaseTile: {
    width: "300px",
    height: "6rem",
    backgroundColor: "palevioletred",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    padding: "1.5rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "20px",
  },
  headerContent: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
} as const;
