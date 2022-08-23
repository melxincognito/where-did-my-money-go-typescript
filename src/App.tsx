import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";

import { PurchaseTile } from "./components/PurchaseTile";
import { Navigation } from "./components/Navigation";

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

  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  //let purchaseCategory: Array<{ index: number; categoryName: string }>;

  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };

  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(Number(e.target.value));
  };

  const addToPurchasesArray = (name: string, amount: number) => {
    purchases.push({ purchaseName: name, purchaseAmount: amount });
    setPurchaseAmount(0);
    setPurchaseName("");
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
        </div>
        <button
          onClick={() => addToPurchasesArray(purchaseName, purchaseAmount)}
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
    </div>
  );
};

export default App;
