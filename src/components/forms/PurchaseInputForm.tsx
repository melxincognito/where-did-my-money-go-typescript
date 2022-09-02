import { FC, ReactNode, useState, ChangeEvent } from "react";
import { nanoid } from "nanoid";
import { useAppDispatch } from "../../redux/hooks";
import {
  addToHousingPurchases,
  addToTransportationPurchases,
  addToMedicalPurchases,
  addToFoodPurchases,
  addToEntertainmentPurchases,
  addToPetsPurchases,
  addToOtherPurchases,
} from "../../redux/reducers/purchase-states/purchasesCategorized";
import { addToPurchases } from "../../redux/reducers/purchase-states/allPurchases";
import { increaseTotalPurchasesAmount } from "../../redux/reducers/purchase-totals/purchaseTotalReducer";
import { increaseNecessaryPurchasesAmount } from "../../redux/reducers/purchase-totals/necessityTotalReducer";
import { increaseWantsPurchasesAmount } from "../../redux/reducers/purchase-totals/wantsTotalReducer";
import { increaseHousingPurchasesAmount } from "../../redux/reducers/purchase-totals/housingTotalReducer";
import { increaseTransportationPurchasesAmount } from "../../redux/reducers/purchase-totals/transportationTotalReducer";
import { increaseFoodPurchasesAmount } from "../../redux/reducers/purchase-totals/foodTotalReducer";
import { increaseMedicalPurchasesAmount } from "../../redux/reducers/purchase-totals/medicalTotalReducer";
import { increaseEntertainmentPurchasesAmount } from "../../redux/reducers/purchase-totals/entertainmentTotalReducer";
import { increasePetsPurchasesAmount } from "../../redux/reducers/purchase-totals/petsTotalReducer";
import { increaseOtherPurchasesAmount } from "../../redux/reducers/purchase-totals/otherTotalReducer";

import {
  TextField,
  Checkbox,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
  Tooltip,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const PurchaseInputForm: FC = () => {
  // uniqueId is used to generate the id for each purchase entered in the purchase input form
  const uniqueId: string = nanoid();

  // create the date so you can timestamp the purchase
  const createTodaysDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();
    const formattedToday = mm + "-" + dd + "-" + yyyy;

    return formattedToday;
  };

  // create variable name for date
  const todaysDate = createTodaysDate();

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

  const handleChangePurchaseCategory = (
    event: SelectChangeEvent<string>,
    child: ReactNode
  ) => {
    setPurchaseCategory(event.target.value as string);
  };

  // redux actions
  const dispatch = useAppDispatch();

  const addPurchaseFromForm = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string,
    date: string
  ) => {
    // add to all purchases state in redux store
    dispatch(
      addToPurchases({
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
        date: date,
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
    category: string,
    date: string
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
            date: date,
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
            date: date,
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
            date: date,
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
            date: date,
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
            date: date,
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
            date: date,
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
            date: date,
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
    addPurchaseFromForm(name, amount, isNecessity, id, category, todaysDate);

    addPurchaseToCategory(name, amount, isNecessity, id, category, todaysDate);

    resetForm();
  };

  return (
    <Box sx={styles.inputFormContainer} aria-label="purchase-input-form">
      <form id="purchaseInputForm" style={styles.inputForm}>
        <div style={styles.contentContainer}>
          <h2 style={styles.headerText}> Purchase Input Form</h2>
          <Box sx={styles.inputFieldContainer}>
            <TextField
              aria-label="Purchase name input"
              label="Purchase Name"
              variant="standard"
              placeholder="Coffee, Target, etc."
              value={purchaseName}
              onChange={handleChangePurchaseName}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              sx={styles.textFieldNew}
            />
            {/* the purchase amount input doesn't have a value because it 
          wont allow you to input a number with cents. It also creates 
          a bug where it'll break the input field if it's set to the purchaseAmount
          state. On the initial page load it's set to 0 but if the user backspaces 
          and leaves the textfield empty then it'll break and you can't use the input
          field until you refresh the page.  */}
            <TextField
              id="purchaseAmountInputField"
              aria-label="Purchase amount input"
              type="number"
              placeholder="0.00"
              label="Purchase Amount"
              variant="standard"
              onChange={handleChangePurchaseAmount}
              InputLabelProps={{ shrink: true }}
              InputProps={{ disableUnderline: true }}
              sx={styles.textFieldNew}
            />

            <FormControl sx={styles.categorySelectorFormControl}>
              <InputLabel>Purchase Category</InputLabel>
              <Select
                aria-label="Purchase category selector"
                value={purchaseCategory}
                label="Purchase Category"
                variant="standard"
                onChange={handleChangePurchaseCategory}
                sx={styles.categorySelectorNew}
                disableUnderline={true}
                size="medium"
              >
                {purchaseCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

          <div>
            <Tooltip
              title="Check box this was a necessary purchase"
              placement="right"
            >
              <Checkbox
                aria-label="Necessary purchase indicator"
                checked={necessaryPurchase}
                onChange={handleChangeSetNecessaryPurchase}
              />
            </Tooltip>

            <label> Necessary purchase?</label>
          </div>
        </div>
        <Button
          variant="contained"
          sx={styles.submitPurchaseButton}
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
      </form>
    </Box>
  );
};

const purchaseCategories: Array<string> = [
  "Housing",
  "Transportation",
  "Medical",
  "Food",
  "Entertainment",
  "Pets",
  "Other",
];

const styles = {
  inputFormContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    padding: "1rem",
    margin: "1rem",
    borderRadius: "30px",
    width: { xs: "90%", md: "80%" },
    display: "grid",
  },
  inputForm: {
    display: "grid",
    justifyItems: "center",
    gap: "0.5rem",
  },
  contentContainer: {
    display: "grid",
    width: "100%",
    gap: "20px",
  },
  headerText: {
    textDecoration: "underline",
    color: "#1f000f",
  },
  inputFieldContainer: {
    display: "grid",
    gap: "2rem",
    width: "100%",
  },
  categorySelectorFormControl: {
    minWidth: "200px",
    textAlign: "left",
  },
  textField: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  textFieldNew: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: 0.12,
    paddingLeft: "1.1rem",
    "& label": { paddingLeft: "1rem" },
  },
  categorySelector: {
    backgroundColor: "white",
  },
  categorySelectorNew: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    padding: 0.92,
    paddingLeft: "0.2rem",
    "& label": { padding: "20rem" },
  },
  submitPurchaseButton: {
    borderRadius: "30px",
    padding: "0.7rem",
    width: "100%",
  },
} as const;
