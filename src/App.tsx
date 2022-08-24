import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { TextField, Checkbox, Button } from "@mui/material";
import { PurchaseTile } from "./components/PurchaseTile";
import { Navigation } from "./components/Navigation";
import { Purchase } from "./Interfaces";
import { nanoid } from "nanoid";

const App: FC = () => {
  const uniqueId: string = nanoid();

  // purchases is an array of objects that takes in a purchase name and purchase amount
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [totalPurchasesAmount, setTotalPurchasesAmount] = useState<number>(0);
  const [necessaryPurchase, setNecessaryPurchase] = useState<boolean>(false);

  const [purchaseName, setPurchaseName] = useState<string>("");

  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [neccesaryPurchasesList, setNecessaryPurchasesList] = useState<
    Purchase[]
  >([]);

  const [wantPurchasesList, setWantPurchasesList] = useState<Purchase[]>([]);

  const [necessaryPurchasesAmount, setNecessaryPurchasesAmount] =
    useState<number>(0);

  const [wantsPurchasesAmount, setWantsPurchasesAmount] = useState<number>(0);

  // event has to declare the type in order to work as a function
  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };
  // event has to declare the type in order to work as a function
  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(parseFloat(e.target.value));
  };

  const handleChangeSetNecessaryPurchase = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNecessaryPurchase(e.target.checked);
  };

  const addToPurchasesArray = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string
  ) => {
    setPurchases([
      ...purchases,
      {
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
      },
    ]);
    setTotalPurchasesAmount(totalPurchasesAmount + amount);
    setPurchaseName("");
    setPurchaseAmount(0);
    setNecessaryPurchase(false);

    if (isNecessity) {
      setNecessaryPurchasesList([
        ...neccesaryPurchasesList,
        {
          purchase: name,
          amount: amount,
          isNecessity: isNecessity,
          id: id,
        },
      ]);
      setNecessaryPurchasesAmount(necessaryPurchasesAmount + amount);
    } else {
      setWantPurchasesList([
        ...wantPurchasesList,
        {
          purchase: name,
          amount: amount,
          isNecessity: isNecessity,
          id: id,
        },
      ]);
      setWantsPurchasesAmount(wantsPurchasesAmount + amount);
    }
  };

  const deletePurchase = (id: string): void => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
  };

  return (
    <div className="App">
      <Navigation />
      <div style={styles.inputForm}>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <TextField
            label="Purchase Name"
            variant="outlined"
            value={purchaseName}
            onChange={handleChangePurchaseName}
          />
          <TextField
            label="Purchase Amount"
            value={purchaseAmount}
            onChange={handleChangePurchaseAmount}
          />

          <div>
            <Checkbox
              aria-label="necessary purchase indicator"
              checked={necessaryPurchase}
              onChange={handleChangeSetNecessaryPurchase}
            />

            <label> Necessary purchase?</label>
          </div>
        </div>
        <Button
          variant="contained"
          onClick={() =>
            addToPurchasesArray(
              purchaseName,
              purchaseAmount,
              necessaryPurchase,
              uniqueId
            )
          }
        >
          submit purchase
        </Button>
      </div>
      <div style={styles.purchasesList}>
        <h1> Purchases</h1>
        <div style={styles.purchases}>
          {purchases.map((purchase, index) => (
            <>
              <PurchaseTile
                key={index}
                id={purchase.id}
                name={purchase.purchase}
                amount={purchase.amount}
                isNecessity={purchase.isNecessity}
                deletePurchase={() => deletePurchase(purchase.id)}
              />
            </>
          ))}
        </div>
      </div>
      <div>Total purchases amount ${totalPurchasesAmount}</div>
      <div>Necessary purchases amount: ${necessaryPurchasesAmount}</div>
      <div>Wants purchases amount: ${wantsPurchasesAmount}</div>
    </div>
  );
};

const styles = {
  inputForm: {
    backgroundColor: "#FFE4E4",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "30px",
  },
  purchasesList: {
    display: "grid",
    backgroundColor: "pink",

    justifyContent: "center",
    height: "60vh",
    overflow: "scroll",
  },
  purchases: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
} as const;

export default App;

/*
interface Props {
  passItems(
    inputPurchaseName: string,
    inputPurchaseAmount: number,
    inputNecessaryPurchase: boolean
  ): any;
}

export const PurchaseInputForm: FC<Props> = ({ passItems }) => {
  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [necessaryPurchase, setNecessaryPurchase] = useState<boolean>(false);
  //let purchaseCategory: Array<{ index: number; categoryName: string }>;

  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };

  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(Number(e.target.value));
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Purchase Name"
          onChange={handleChangePurchaseName}
        />
        <input
          placeholder="Purchase Amount"
          onChange={handleChangePurchaseAmount}
        />
      </div>
      <button
        onClick={passItems(purchaseName, purchaseAmount, necessaryPurchase)}
      >
        {" "}
        submit purchase
      </button>
      <div>
        <h1>{purchaseName}</h1>
        <h1>{purchaseAmount}</h1>
      </div>
    </div>
  );
};

*/
