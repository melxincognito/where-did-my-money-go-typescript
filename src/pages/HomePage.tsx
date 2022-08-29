import { FC, useState, ChangeEvent } from "react";

import { Purchase } from "../Interfaces";
import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { PurchasesList } from "../components/lists/PurchasesList";
import { PurchaseTotals } from "../components/PurchaseTotals";
import { PurchaseCategoriesList } from "../components/lists/PurchaseCategoriesList";
import { PurchaseInputForm } from "../components/PurchaseInputForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Box } from "@mui/material";

import { allPurchasesState } from "../redux/reducers/purchase-states/allPurchases";

import {
  addToPurchases,
  removeFromPurchases,
} from "../redux/reducers/purchase-states/allPurchases";

// reducer actions imports
import {
  increaseTotalPurchasesAmount,
  decreaseTotalPurchasesAmount,
} from "../redux/reducers/purchase-totals/purchaseTotalReducer";
import {
  increaseNecessaryPurchasesAmount,
  decreaseNecessaryPurchasesAmount,
} from "../redux/reducers/purchase-totals/necessityTotalReducer";
import {
  increaseWantsPurchasesAmount,
  decreaseWantsPurchasesAmount,
} from "../redux/reducers/purchase-totals/wantsTotalReducer";
import {
  increaseHousingPurchasesAmount,
  decreaseHousingPurchasesAmount,
} from "../redux/reducers/purchase-totals/housingTotalReducer";
import {
  increaseTransportationPurchasesAmount,
  decreaseTransportationPurchasesAmount,
} from "../redux/reducers/purchase-totals/transportationTotalReducer";
import {
  increaseFoodPurchasesAmount,
  decreaseFoodPurchasesAmount,
} from "../redux/reducers/purchase-totals/foodTotalReducer";
import {
  increaseMedicalPurchasesAmount,
  decreaseMedicalPurchasesAmount,
} from "../redux/reducers/purchase-totals/medicalTotalReducer";
import {
  increaseEntertainmentPurchasesAmount,
  decreaseEntertainmentPurchasesAmount,
} from "../redux/reducers/purchase-totals/entertainmentTotalReducer";
import {
  increasePetsPurchasesAmount,
  decreasePetsPurchasesAmount,
} from "../redux/reducers/purchase-totals/petsTotalReducer";
import {
  increaseOtherPurchasesAmount,
  decreaseOtherPurchasesAmount,
} from "../redux/reducers/purchase-totals/otherTotalReducer";

const mermaid = require("mermaid");

export const HomePage: FC = () => {
  // uniqueId is used to generate the id for each purchase entered in the purchase input form
  const uniqueId: string = nanoid();

  // selecting the input form so it  deletes the purchaseAmountInputField after an item has been added
  var purchaseAmountInputField = document.getElementById(
    "purchaseInputForm"
  ) as HTMLFormElement;

  var mermaidDiv = document.getElementById("mermaid") as any;

  const array1: Array<{
    purchase: string;
    amount: number;
    isNecessity: boolean;
    id: string;
    category: string;
  }> = useAppSelector(allPurchasesState);

  // purchase input form

  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [necessaryPurchase, setNecessaryPurchase] = useState<boolean>(false);
  const [purchaseCategory, setPurchaseCategory] = useState<string>("");

  // input purchases arrays

  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const [necessaryPurchasesList, setNecessaryPurchasesList] = useState<
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

  const dispatch = useAppDispatch();

  // add purchase to array, set totals, reset input form and categorize purchase
  const addToPurchasesArray = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    dispatch(
      addToPurchases({
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
      })
    );

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

    dispatch(increaseTotalPurchasesAmount(amount));

    setPurchaseName("");
    setPurchaseAmount(0);
    setNecessaryPurchase(false);
    setPurchaseCategory("");
    if (purchaseAmountInputField) purchaseAmountInputField.reset();

    if (isNecessity) {
      setNecessaryPurchasesList([
        ...necessaryPurchasesList,
        {
          purchase: name,
          amount: amount,
          isNecessity: isNecessity,
          id: id,
          category: category,
        },
      ]);
      dispatch(increaseNecessaryPurchasesAmount(amount));
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
      dispatch(increaseWantsPurchasesAmount(amount));
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
        dispatch(increaseHousingPurchasesAmount(amount));

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
        dispatch(increaseTransportationPurchasesAmount(amount));

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
        dispatch(increaseMedicalPurchasesAmount(amount));

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
        dispatch(increaseFoodPurchasesAmount(amount));

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
        dispatch(increaseEntertainmentPurchasesAmount(amount));
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
        dispatch(increasePetsPurchasesAmount(amount));

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
        dispatch(increaseOtherPurchasesAmount(amount));

        break;
      }
    }

    mermaidDiv.html.removeAttribute("data-processed");
    mermaid.init(undefined, mermaidDiv);
  };

  // delete purchase from all UI and reset all totals.

  const deletePurchase = (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ): void => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
    dispatch(decreaseTotalPurchasesAmount(amount));

    if (isNecessity) {
      dispatch(decreaseNecessaryPurchasesAmount(amount));
    } else {
      dispatch(decreaseWantsPurchasesAmount(amount));
    }

    switch (purchaseCategory) {
      case "Housing": {
        setHousingPurchasesList(
          housingPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseHousingPurchasesAmount(amount));
        break;
      }
      case "Transportation": {
        setTransportationPurchasesList(
          transportationPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseTransportationPurchasesAmount(amount));
        break;
      }
      case "Medical": {
        setMedicalPurchasesList(
          medicalPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseMedicalPurchasesAmount(amount));
        break;
      }
      case "Food": {
        setFoodPurchasesList(
          foodPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseFoodPurchasesAmount(amount));
        break;
      }
      case "Entertainment": {
        setEntertainmentPurchasesList(
          entertainmentPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseEntertainmentPurchasesAmount(amount));
        break;
      }
      case "Pets": {
        setPetsPurchasesList(
          petsPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreasePetsPurchasesAmount(amount));
        break;
      }
      default: {
        setOtherPurchasesList(
          otherPurchasesList.filter((purchase) => purchase.id !== id)
        );
        dispatch(decreaseOtherPurchasesAmount(amount));
        break;
      }
    }
  };

  const sendToPurchases = (): void => {
    const item = {
      name: "Chicken wings",
      amount: 33,
      isNecessity: true,
      id: "1",
      category: "Food",
    };

    dispatch(
      addToPurchases({
        purchase: item.name,
        amount: item.amount,
        isNecessity: item.isNecessity,
        id: item.id,
        category: item.category,
      })
    );
  };

  const remove = (item: string, price: number) => {
    dispatch(removeFromPurchases({ purchase: item, price: price }));
  };

  const sendToAllPurchasesState = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    dispatch(
      addToPurchases({
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
      })
    );
  };

  return (
    <>
      {/* PURCHASE INPUT FORM */}

      <button
        onClick={() => {
          console.log(array1);
        }}
      >
        the other one
      </button>

      <button onClick={sendToPurchases}>try this</button>
      <button onClick={() => remove("berry", 23)}> remove it now</button>

      <button
        onClick={() =>
          sendToAllPurchasesState(
            purchaseName,
            purchaseAmount,
            necessaryPurchase,
            uniqueId,
            purchaseCategory
          )
        }
      >
        {" "}
        send from form
      </button>
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

      <PurchasesList deletePurchase={deletePurchase} />
      {/* PURCHASE TOTALS */}

      <PurchaseTotals />
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
          deletePurchase={deletePurchase}
        />
      </Box>
    </>
  );
};
