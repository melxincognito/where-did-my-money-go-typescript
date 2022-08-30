import { FC, useState, ChangeEvent } from "react";

import { nanoid } from "nanoid";
import { SelectChangeEvent } from "@mui/material/Select";
import { PurchasesList } from "../components/lists/PurchasesList";
import { PurchaseTotals } from "../components/PurchaseTotals";
import { PurchaseCategoriesList } from "../components/lists/PurchaseCategoriesList";
import { PurchaseInputForm } from "../components/PurchaseInputForm";
import { useAppDispatch } from "../redux/hooks";
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
import { addToPurchases } from "../redux/reducers/purchase-states/allPurchases";
import { increaseTotalPurchasesAmount } from "../redux/reducers/purchase-totals/purchaseTotalReducer";
import { increaseNecessaryPurchasesAmount } from "../redux/reducers/purchase-totals/necessityTotalReducer";
import { increaseWantsPurchasesAmount } from "../redux/reducers/purchase-totals/wantsTotalReducer";
import { increaseHousingPurchasesAmount } from "../redux/reducers/purchase-totals/housingTotalReducer";
import { increaseTransportationPurchasesAmount } from "../redux/reducers/purchase-totals/transportationTotalReducer";
import { increaseFoodPurchasesAmount } from "../redux/reducers/purchase-totals/foodTotalReducer";
import { increaseMedicalPurchasesAmount } from "../redux/reducers/purchase-totals/medicalTotalReducer";
import { increaseEntertainmentPurchasesAmount } from "../redux/reducers/purchase-totals/entertainmentTotalReducer";
import { increasePetsPurchasesAmount } from "../redux/reducers/purchase-totals/petsTotalReducer";
import { increaseOtherPurchasesAmount } from "../redux/reducers/purchase-totals/otherTotalReducer";

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

  // redux actions
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

  return (
    <>
      {/* PURCHASE INPUT FORM AND TOTALS */}
      <Box sx={styles.purchaseInputFormAndTotalsContainer}>
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
        <PurchaseTotals />
      </Box>

      {/* PURCHASE LIST */}

      <PurchasesList />
    </>
  );
};

const styles = {
  purchaseInputFormAndTotalsContainer: {
    display: { xs: "grid", md: "flex" },
    justifyContent: "center",
    justifyItems: "center",
    marginBottom: "3rem",
    width: "100%",
  },
} as const;
