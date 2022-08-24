import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";

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

  // let purchases: Array<{ purchaseName: string; purchaseAmount: number }> = [];

  // purchaseName state expects a string to be passed
  const [purchaseName, setPurchaseName] = useState<string>("");

  // purchaseAmount state expects a number to get passed
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);

  // event has to declare the type in order to work as a function
  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };
  // event has to declare the type in order to work as a function
  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(Number(e.target.value));
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
  };

  const deletePurchase = (id: string): void => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
  };

  return (
    <div className="App">
      <Navigation />
      <div>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
          }}
        >
          <input
            placeholder="Purchase Name"
            value={purchaseName}
            onChange={handleChangePurchaseName}
          />
          <input
            placeholder="Purchase Amount"
            value={purchaseAmount}
            onChange={handleChangePurchaseAmount}
          />
          <div>
            <input
              type="checkbox"
              aria-label="necessary purchase indicator"
              checked={necessaryPurchase}
              onChange={handleChangeSetNecessaryPurchase}
            />
            <label> Necessary purchase?</label>
          </div>
        </div>
        <button
          onClick={() =>
            addToPurchasesArray(
              purchaseName,
              purchaseAmount,
              necessaryPurchase,
              uniqueId
            )
          }
        >
          {" "}
          submit purchase
        </button>
        <div>
          <h1>{purchaseName}</h1>
          <h1>{purchaseAmount}</h1>
        </div>
      </div>
      <button onClick={() => console.log(purchases)}> click me</button>

      <div style={styles.purchasesList}>
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
      <div> purchases amount ${totalPurchasesAmount}</div>
    </div>
  );
};

const styles = {
  purchasesList: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "red",
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
