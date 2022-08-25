import { FC, useState, ChangeEvent } from "react";

import { Purchase } from "../Interfaces";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { PurchasesList } from "../components/lists/PurchasesList";
import { PurchaseTotals } from "../components/PurchaseTotals";
import { PurchaseCategoriesList } from "../components/lists/PurchaseCategoriesList";
import { PurchaseInputForm } from "../components/PurchaseInputForm";

import { Card } from "../redux/Card";

import { Box } from "@mui/material";

export const HomePage: FC = () => {
  // uniqueId is used to generate the id for each purchase entered in the purchase input form
  const uniqueId: string = nanoid();

  // selecting the input form so it  deletes the purchaseAmountInputField after an item has been added
  var purchaseAmountInputField = document.getElementById(
    "purchaseInputForm"
  ) as HTMLFormElement;

  // purchase totals

  const [totalPurchasesAmount, setTotalPurchasesAmount] = useState<number>(0);
  const [necessaryPurchasesAmount, setNecessaryPurchasesAmount] =
    useState<number>(0);
  const [wantsPurchasesAmount, setWantsPurchasesAmount] = useState<number>(0);
  const [housingPurchasesTotal, setHousingPurchasesTotal] = useState<number>(0);
  const [transportationPurchasesTotal, setTransportationPurchasesTotal] =
    useState<number>(0);
  const [medicalPurchasesTotal, setMedicalPurchasesTotal] = useState<number>(0);
  const [foodPurchasesTotal, setFoodPurchasesTotal] = useState<number>(0);
  const [entertainmentPurchasesTotal, setEntertainmentPurchasesTotal] =
    useState<number>(0);
  const [petsPurchasesTotal, setPetsPurchasesTotal] = useState<number>(0);
  const [otherPurchasesTotal, setOtherPurchasesTotal] = useState<number>(0);

  // purchase input form

  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [necessaryPurchase, setNecessaryPurchase] = useState<boolean>(false);
  const [purchaseCategory, setPurchaseCategory] = useState<string>("");

  // input purchases arrays

  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const [neccesaryPurchasesList, setNecessaryPurchasesList] = useState<
    Purchase[]
  >([]);

  const [wantPurchasesList, setWantPurchasesList] = useState<Purchase[]>([]);

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

  // handleChange input form data

  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };

  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    // setting as a float because it's getting input as a string
    setPurchaseAmount(parseFloat(e.target.value));
  };

  const handleChangeSetNecessaryPurchase = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    setNecessaryPurchase(e.target.checked);
  };

  const handleChangePurchaseCategory = (event: SelectChangeEvent) => {
    setPurchaseCategory(event.target.value as string);
  };

  // add purchase to array, set totals, reset input form and categorize purchase
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
    if (purchaseAmountInputField) purchaseAmountInputField.reset();

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

  // delete purchase from all UI and reset all totals.

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
    <>
      {/* PURCHASE INPUT FORM */}
      <Card />
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
      {/* PURCHASE LIST */}

      <PurchasesList purchases={purchases} deletePurchase={deletePurchase} />
      {/* PURCHASE TOTALS */}

      <PurchaseTotals
        totalPurchasesAmount={totalPurchasesAmount}
        necessaryPurchasesAmount={necessaryPurchasesAmount}
        wantsPurchasesAmount={wantsPurchasesAmount}
      />
      {/* PURCHASE CATEGORIES*/}
      <Box
        id="purchaseCategoriesListContainer"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {/* Keep the Box or the categories list isn't centered */}
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
    </>
  );
};
