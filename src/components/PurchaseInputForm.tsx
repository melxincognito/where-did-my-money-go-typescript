import { FC } from "react";
import {
  TextField,
  Checkbox,
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Box,
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
    <div style={styles.inputForm}>
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
          <TextField
            aria-label="Purchase amount input"
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
          <Checkbox
            aria-label="Necessary purchase indicator"
            checked={necessaryPurchase}
            onChange={handleChangeSetNecessaryPurchase}
          />

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
    </div>
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
  inputForm: {
    backgroundColor: "#FFE4E4",
    padding: "1rem",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    borderRadius: "30px",
    display: "grid",
  },
  contentContainer: {
    display: "grid",
    justifyContent: "center",
    gap: "20px",
  },
  headerText: {
    textDecoration: "underline",
  },
  inputFieldContainer: {
    display: { xs: "grid", md: "flex" },
    gap: "2rem",
    width: { xs: "100%", md: "130%" },
  },
  categorySelectorFormControl: {
    minWidth: "200px",
    textAlign: "left",
  },
  textField: {
    backgroundColor: "white",
  },
  categorySelector: {
    backgroundColor: "white",
  },
  submitPurchaseButton: {
    borderRadius: "30px",
  },
} as const;
