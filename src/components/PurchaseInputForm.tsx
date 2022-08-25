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
        <h2 style={{ textDecoration: "underline" }}> Purchase Input Form</h2>
        <Box sx={styles.inputFieldContainer}>
          <TextField
            label="Purchase Name"
            value={purchaseName}
            onChange={handleChangePurchaseName}
            sx={{ backgroundColor: "white" }}
          />
          <TextField
            sx={{ backgroundColor: "white" }}
            label="Purchase Amount"
            InputLabelProps={{ shrink: true }}
            onChange={handleChangePurchaseAmount}
          />

          <FormControl sx={styles.categorySelectorFormControl}>
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
        </Box>

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
  inputFieldContainer: {
    display: { xs: "grid", md: "flex" },
    gap: "2rem",
    width: { xs: "100%", md: "130%" },
  },
  categorySelectorFormControl: {
    minWidth: "200px",
    textAlign: "left",
  },
} as const;
