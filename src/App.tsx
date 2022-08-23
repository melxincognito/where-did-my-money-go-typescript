import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";

import { PurchaseTile } from "./components/PurchaseTile";

interface Purchases {
  purchase: string;
  amount: number;
}

interface Props {
  passItems(inputPurchaseName: string, inputPurchaseAmount: number): any;
}

export const PurchaseInputForm: FC<Props> = ({ passItems }) => {
  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
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
      <button onClick={passItems(purchaseName, purchaseAmount)}>
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

const App: FC = () => {
  let purchases: Array<{ purchaseName: string; purchaseAmount: number }> = [];

  const [currentPurchase, setCurrentPurchase] = useState<string>("");
  const [currentPurchaseAmount, setCurrentPurchaseAmount] = useState<number>();

  const grabShit = (inputPurchaseName: string, purchaseAmount: number) => {
    if (inputPurchaseName.length > 5 && purchaseAmount > 0) {
      setCurrentPurchase(inputPurchaseName);
      setCurrentPurchaseAmount(purchaseAmount);

      purchases.push({
        purchaseName: currentPurchase,
        purchaseAmount: Number(currentPurchaseAmount),
      });

      return purchases;
    } else {
      return;
    }
  };

  return (
    <div className="App">
      <PurchaseInputForm passItems={grabShit} />

      <button onClick={() => console.log(purchases)}> click me</button>
    </div>
  );
};

export default App;
