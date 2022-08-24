import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import {
  TextField,
  Checkbox,
  Button,
  Paper,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
import { PurchaseTile } from "./components/PurchaseTile";
import { Navigation } from "./components/Navigation";
import { Purchase } from "./Interfaces";
import { nanoid } from "nanoid";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const purchaseCategories: Array<string> = [
  "Housing",
  "Transportation",
  "Medical",
  "Food",
  "Pets",
  "Clothing",
  "Entertainment",
  "Other",
];

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

  const [purchaseCategory, setPurchaseCategory] = useState<string>("");

  const handleChangePurchaseCategory = (event: SelectChangeEvent) => {
    setPurchaseCategory(event.target.value as string);
  };

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
          <h2 style={{ textDecoration: "underline" }}> Purchase Input Form</h2>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              width: "130%",
              position: "relative",
              left: "-5%",
            }}
          >
            <TextField
              label="Purchase Name"
              value={purchaseName}
              onChange={handleChangePurchaseName}
              sx={{ backgroundColor: "white" }}
            />
            <TextField
              sx={{ backgroundColor: "white" }}
              label="Purchase Amount"
              value={purchaseAmount}
              onChange={handleChangePurchaseAmount}
            />

            <FormControl sx={{ width: "20%", textAlign: "left" }}>
              <InputLabel>Purchase Category</InputLabel>
              <Select
                value={purchaseCategory}
                label="Purchase Category"
                onChange={handleChangePurchaseCategory}
                sx={{ backgroundColor: "white" }}
              >
                {purchaseCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

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
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <Paper sx={styles.paper}>
          Total purchases amount <div>${totalPurchasesAmount}</div>
        </Paper>
        <Paper sx={styles.paper}>
          Necessary purchases amount: <div>${necessaryPurchasesAmount} </div>
        </Paper>
        <Paper sx={styles.paper}>
          Wants purchases amount: <div>${wantsPurchasesAmount} </div>
        </Paper>
      </div>
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
    display: "grid",
  },
  purchasesList: {
    display: "grid",
    backgroundColor: "pink",
    margin: "1rem",
    borderRadius: "30px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    justifyContent: "center",
    height: "40vh",
    overflow: "scroll",
  },
  purchases: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  paper: {
    padding: "1rem",
    backgroundColor: "secondary.main",
    color: "#404040",
    display: "grid",
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
