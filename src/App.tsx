import React, { FC, useState, ChangeEvent } from "react";
import "./App.css";
import {
  TextField,
  Checkbox,
  Button,
  Paper,
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
  "Entertainment",
  "Pets",
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

  const [housingPurchasesList, setHousingPurchasesList] = useState<Purchase[]>(
    []
  );
  const [transportationPurchasesList, setTransportationPurchasesList] =
    useState<Purchase[]>([]);
  const [medicalPurchasesList, setMedicalPurchasesList] = useState<Purchase[]>(
    []
  );
  const [foodPurchasesList, setFoodPurchasesList] = useState<Purchase[]>([]);
  const [entertainmentPurchasesList, setEntertainmentPurchasesList] = useState<
    Purchase[]
  >([]);
  const [petsPurchasesList, setPetsPurchasesList] = useState<Purchase[]>([]);
  const [otherPurchasesList, setOtherPurchasesList] = useState<Purchase[]>([]);

  const [housingPurchasesTotal, setHousingPurchasesTotal] = useState<number>(0);
  const [transportationPurchasesTotal, setTransportationPurchasesTotal] =
    useState<number>(0);
  const [medicalPurchasesTotal, setMedicalPurchasesTotal] = useState<number>(0);
  const [foodPurchasesTotal, setFoodPurchasesTotal] = useState<number>(0);
  const [entertainmentPurchasesTotal, setEntertainmentPurchasesTotal] =
    useState<number>(0);
  const [petsPurchasesTotal, setPetsPurchasesTotal] = useState<number>(0);
  const [otherPurchasesTotal, setOtherPurchasesTotal] = useState<number>(0);

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
    id: string,
    category: string
  ) => {
    setPurchases([
      ...purchases,
      {
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
      },
    ]);
    setTotalPurchasesAmount(totalPurchasesAmount + amount);
    setPurchaseName("");
    setPurchaseAmount(0);
    setNecessaryPurchase(false);
    setPurchaseCategory("");

    if (isNecessity) {
      setNecessaryPurchasesList([
        ...neccesaryPurchasesList,
        {
          purchase: name,
          amount: amount,
          isNecessity: isNecessity,
          id: id,
          category: category,
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
          category: category,
        },
      ]);
      setWantsPurchasesAmount(wantsPurchasesAmount + amount);
    }
    switch (category) {
      case "Housing": {
        setHousingPurchasesList([
          ...housingPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setHousingPurchasesTotal(housingPurchasesTotal + amount);

        break;
      }
      case "Transportation": {
        setTransportationPurchasesList([
          ...transportationPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setTransportationPurchasesTotal(transportationPurchasesTotal + amount);

        break;
      }
      case "Medical": {
        setMedicalPurchasesList([
          ...medicalPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setMedicalPurchasesTotal(medicalPurchasesTotal + amount);
        break;
      }
      case "Food": {
        setFoodPurchasesList([
          ...foodPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setFoodPurchasesTotal(foodPurchasesTotal + amount);
        break;
      }
      case "Entertainment": {
        setEntertainmentPurchasesList([
          ...entertainmentPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setEntertainmentPurchasesTotal(entertainmentPurchasesTotal + amount);
        break;
      }
      case "Pets": {
        setPetsPurchasesList([
          ...petsPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setPetsPurchasesTotal(petsPurchasesTotal + amount);
        break;
      }
      default: {
        setOtherPurchasesList([
          ...otherPurchasesList,
          {
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          },
        ]);
        setOtherPurchasesTotal(otherPurchasesTotal + amount);
        break;
      }
    }
  };

  const deletePurchase = (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ): void => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));

    setTotalPurchasesAmount(totalPurchasesAmount - amount);

    if (isNecessity) {
      setNecessaryPurchasesAmount(necessaryPurchasesAmount - amount);
    } else {
      setWantsPurchasesAmount(wantsPurchasesAmount - amount);
    }

    switch (purchaseCategory) {
      case "Housing": {
        setHousingPurchasesTotal(housingPurchasesTotal - amount);
        setHousingPurchasesList(
          housingPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      case "Transportation": {
        setTransportationPurchasesTotal(transportationPurchasesTotal - amount);
        setTransportationPurchasesList(
          transportationPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      case "Medical": {
        setMedicalPurchasesTotal(medicalPurchasesTotal - amount);
        setMedicalPurchasesList(
          medicalPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      case "Food": {
        setFoodPurchasesTotal(foodPurchasesTotal - amount);
        setFoodPurchasesList(
          foodPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      case "Entertainment": {
        setEntertainmentPurchasesTotal(entertainmentPurchasesTotal - amount);
        setEntertainmentPurchasesList(
          entertainmentPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      case "Pets": {
        setPetsPurchasesTotal(petsPurchasesTotal - amount);
        setPetsPurchasesList(
          petsPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
      default: {
        setOtherPurchasesTotal(otherPurchasesTotal - amount);
        setOtherPurchasesList(
          otherPurchasesList.filter((purchase) => purchase.id !== id)
        );
        break;
      }
    }
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

            <FormControl sx={{ minWidth: "200px", textAlign: "left" }}>
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
          sx={{ borderRadius: "30px" }}
          onClick={() =>
            addToPurchasesArray(
              purchaseName,
              purchaseAmount,
              necessaryPurchase,
              uniqueId,
              purchaseCategory
            )
          }
        >
          submit purchase
        </Button>
      </div>
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
      <div
        style={{
          display: "flex",
          gap: "3rem",
          justifyContent: "center",
          alignContent: "center",

          marginTop: "2rem",
        }}
      >
        <Paper sx={styles.paper}>
          Total purchases amount: <div>${totalPurchasesAmount}</div>
        </Paper>
        <Paper sx={styles.paper}>
          Necessary purchases amount: <div>${necessaryPurchasesAmount} </div>
        </Paper>
        <Paper sx={styles.paper}>
          Wants purchases amount: <div>${wantsPurchasesAmount} </div>
        </Paper>
      </div>

      <div
        id="purchase categories list"
        style={styles.purchaseCategoryContainer}
      >
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Housing Purchases</h1>
            <h3>${housingPurchasesTotal}</h3>
          </div>

          {housingPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Transportation Purchases</h1>
            <h3>${transportationPurchasesTotal}</h3>
          </div>

          {transportationPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Medical Purchases</h1>
            <h3>${medicalPurchasesTotal} </h3>
          </div>

          {medicalPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Food Purchases</h1>
            <h3> ${foodPurchasesTotal}</h3>
          </div>

          {foodPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Entertainment Purchases</h1>
            <h3>${entertainmentPurchasesTotal} </h3>
          </div>

          {entertainmentPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Pets Purchases</h1>
            <h3>${petsPurchasesTotal} </h3>
          </div>

          {petsPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
        <div style={styles.purchaseCategoryTile}>
          <div style={{ color: "white" }}>
            <h1>Other Purchases</h1>
            <h3> ${otherPurchasesTotal} </h3>
          </div>

          {otherPurchasesList.map((purchase, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  purchaseCategoryContainer: {
    display: "flex",
    margin: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  purchaseCategoryTile: {
    width: "43%",
    height: "400px",
    backgroundColor: "#141414",
    display: "grid",
    justifyContent: "center",
    overflow: "scroll",
    gap: "1rem",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "30px",
  },
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
