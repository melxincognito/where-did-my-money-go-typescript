import { FC, useState, ChangeEvent } from "react";
import "./App.css";
import { Box } from "@mui/material";
import { Navigation } from "./components/Navigation";
import { Purchase } from "./Interfaces";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";

import { PurchasesList } from "./components/PurchasesList";
import { PurchaseTotals } from "./components/PurchaseTotals";
import { PurchaseCategoriesList } from "./components/PurchaseCategoriesList";
import { PurchaseInputForm } from "./components/PurchaseInputForm";

const App: FC = () => {
  // uniqueId is used to generate a unique id for each purchase entered in the purchase input form
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

      {/* PURCHASE INPUT FORM */}
      <PurchaseInputForm
        uniqueId={uniqueId}
        purchaseName={purchaseName}
        purchaseCategory={purchaseCategory}
        necessaryPurchase={necessaryPurchase}
        handleChangePurchaseAmount={handleChangePurchaseAmount}
        handleChangePurchaseName={handleChangePurchaseName}
        handleChangeSetNecessaryPurchase={handleChangeSetNecessaryPurchase}
        handleChangePurchaseCategory={handleChangePurchaseCategory}
        purchaseAmount={purchaseAmount}
        addToPurchasesArray={() =>
          addToPurchasesArray(
            purchaseName,
            purchaseAmount,
            necessaryPurchase,
            uniqueId,
            purchaseCategory
          )
        }
      />

      <PurchasesList purchases={purchases} deletePurchase={deletePurchase} />
      {/* PURCHASE TOTALS */}

      <PurchaseTotals
        totalPurchasesAmount={totalPurchasesAmount}
        necessaryPurchasesAmount={necessaryPurchasesAmount}
        wantsPurchasesAmount={wantsPurchasesAmount}
      />

      {/* PURCHASE CATEGORIES*/}
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <PurchaseCategoriesList
          housingPurchasesList={housingPurchasesList}
          transportationPurchasesList={transportationPurchasesList}
          medicalPurchasesList={medicalPurchasesList}
          foodPurchasesList={foodPurchasesList}
          entertainmentPurchasesList={entertainmentPurchasesList}
          petsPurchasesList={petsPurchasesList}
          otherPurchasesList={otherPurchasesList}
          housingPurchasesTotal={housingPurchasesTotal}
          foodPurchasesTotal={foodPurchasesTotal}
          medicalPurchasesTotal={medicalPurchasesTotal}
          transportationPurchasesTotal={transportationPurchasesTotal}
          entertainmentPurchasesTotal={entertainmentPurchasesTotal}
          petsPurchasesTotal={petsPurchasesTotal}
          otherPurchasesTotal={otherPurchasesTotal}
          deletePurchase={deletePurchase}
        />
      </Box>
    </div>
  );
};

export default App;
