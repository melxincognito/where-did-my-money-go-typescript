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
  // purchases is an array of objects that takes in a purchase name and purchase amount
  let purchases: Array<{ purchaseName: string; purchaseAmount: number }> = [];

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

  const addToPurchasesArray = (name: string, amount: number) => {
    purchases.push({ purchaseName: name, purchaseAmount: Number(amount) });

    return purchases;
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

      <div></div>
    </div>
  );
};

export default App;
