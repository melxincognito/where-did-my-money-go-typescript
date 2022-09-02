import { FC } from "react";
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

interface PurchaseInputFormProps {
  purchaseName: string;
  purchaseAmount: number;
  purchaseCategory: string;
  necessaryPurchase: boolean;
  uniqueId: string;
  handleChangePurchaseName: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleChangePurchaseAmount: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleChangePurchaseCategory: (event: SelectChangeEvent) => void;
  handleChangeSetNecessaryPurchase: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addToPurchasesArray: (
    purchaseName: string,
    purchaseAmount: number,
    necessaryPurchase: boolean,
    uniqueId: string,
    purchaseCategory: string
  ) => void;
}

export const PurchaseInputForm: FC<PurchaseInputFormProps> = ({
  purchaseName,
  purchaseAmount,
  handleChangePurchaseName,
  handleChangePurchaseAmount,
  purchaseCategory,
  handleChangePurchaseCategory,
  necessaryPurchase,
  handleChangeSetNecessaryPurchase,
  addToPurchasesArray,
  uniqueId,
}) => {
  return (
    <Box sx={styles.inputFormContainer} aria-label="purchase-input-form">
      <form id="purchaseInputForm" style={styles.inputForm}>
        <div style={styles.contentContainer}>
          <h2 style={styles.headerText}> Purchase Input Form</h2>
          <Box sx={styles.inputFieldContainer}>
            <TextField
              aria-label="Purchase name input"
              label="Purchase Name"
              placeholder="Coffee, Target, etc."
              value={purchaseName}
              onChange={handleChangePurchaseName}
              InputLabelProps={{ shrink: true }}
              sx={styles.textField}
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
              onChange={handleChangePurchaseAmount}
              InputLabelProps={{ shrink: true }}
              sx={styles.textField}
            />

            <FormControl sx={styles.categorySelectorFormControl}>
              <InputLabel>Purchase Category</InputLabel>
              <Select
                aria-label="Purchase category selector"
                value={purchaseCategory}
                label="Purchase Category"
                onChange={handleChangePurchaseCategory}
                sx={styles.categorySelector}
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
    backgroundColor: "rgba(173, 0, 87, 0.37)",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
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
  categorySelector: {
    backgroundColor: "white",
  },
  submitPurchaseButton: {
    borderRadius: "30px",
    padding: "0.7rem",
    width: "100%",
  },
} as const;
