import { FC, useState, ChangeEvent } from "react";

import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { PurchasesList } from "../components/lists/PurchasesList";
import { PurchaseTotals } from "../components/PurchaseTotals";
import { PurchaseCategoriesList } from "../components/lists/PurchaseCategoriesList";
import { PurchaseInputForm } from "../components/PurchaseInputForm";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Box } from "@mui/material";

import {
  addToHousingPurchases,
  addToTransportationPurchases,
  addToMedicalPurchases,
  addToFoodPurchases,
  addToEntertainmentPurchases,
  addToPetsPurchases,
  addToOtherPurchases,
} from "../redux/reducers/purchase-states/purchasesCategorized";

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

// TODO get items to delete from the redux store

export const HomePage: FC = () => {
  // uniqueId is used to generate the id for each purchase entered in the purchase input form
  const uniqueId: string = nanoid();

  // purchase input form

  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  const [necessaryPurchase, setNecessaryPurchase] = useState<boolean>(false);
  const [purchaseCategory, setPurchaseCategory] = useState<string>("");

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

  const addPurchaseFromForm = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    // add to all purchases state in redux store
    dispatch(
      addToPurchases({
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
      })
    );

    // add to the appropriate total in redux store
    dispatch(increaseTotalPurchasesAmount(amount));
    if (isNecessity) {
      dispatch(increaseNecessaryPurchasesAmount(amount));
    } else {
      dispatch(increaseWantsPurchasesAmount(amount));
    }
  };

  const addPurchaseToCategory = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    switch (category) {
      case "Housing": {
        dispatch(
          addToHousingPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );
        dispatch(increaseHousingPurchasesAmount(amount));

        break;
      }
      case "Transportation": {
        dispatch(
          addToTransportationPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );

        dispatch(increaseTransportationPurchasesAmount(amount));

        break;
      }
      case "Medical": {
        dispatch(
          addToMedicalPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );

        dispatch(increaseMedicalPurchasesAmount(amount));

        break;
      }
      case "Food": {
        dispatch(
          addToFoodPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );
        dispatch(increaseFoodPurchasesAmount(amount));

        break;
      }
      case "Entertainment": {
        dispatch(
          addToEntertainmentPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );
        dispatch(increaseEntertainmentPurchasesAmount(amount));
        break;
      }
      case "Pets": {
        dispatch(
          addToPetsPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );
        dispatch(increasePetsPurchasesAmount(amount));

        break;
      }
      default: {
        dispatch(
          addToOtherPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
          })
        );
        dispatch(increaseOtherPurchasesAmount(amount));

        break;
      }
    }
  };

  const resetForm = () => {
    setPurchaseName("");
    setPurchaseAmount(0);
    setNecessaryPurchase(false);
    setPurchaseCategory("");
    // selecting the input form so it  deletes the purchaseAmountInputField after
    // an item has been added it's not set to the value of the
    // state so it needs to be reset with the if statement.
    var purchaseAmountInputField = document.getElementById(
      "purchaseInputForm"
    ) as HTMLFormElement;

    if (purchaseAmountInputField) purchaseAmountInputField.reset();
  };

  // add purchase to array, set totals, reset input form and categorize purchase
  const addToPurchasesArray = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    addPurchaseFromForm(name, amount, isNecessity, id, category);

    addPurchaseToCategory(name, amount, isNecessity, id, category);

    resetForm();
  };

  // delete purchase from all UI and reset all totals.
  /*
  const deletePurchase = (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ): void => {
    setPurchases(purchases.filter((purchase) => purchase.id !== id));
    decreaseTotalPurchasesAmountTile(amount);

    if (isNecessity) {
      decreaseNecessaryPurchasesAmountTile(amount);
    } else {
      decreaseWantsPurchasesAmountTile(amount);
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
  };*/

  const deletePurchase = (
    id: string,
    amount: number,
    isNecessity: boolean,
    purchaseCategory: string
  ): void => {
    console.log(id, amount, isNecessity, purchaseCategory);
  };

  return (
    <>
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
        <PurchaseCategoriesList deletePurchase={deletePurchase} />
      </Box>
    </>
  );
};
