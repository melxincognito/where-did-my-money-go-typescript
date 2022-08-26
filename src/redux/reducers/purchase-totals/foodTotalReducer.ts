import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialFoodPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const foodPurchasesAmountSlice = createSlice({
  name: "foodPurchasesAmount",
  initialState: initialFoodPurchaseAmountsState,
  reducers: {
    increaseFoodPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseFoodPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decreaseFoodPurchasesAmount, increaseFoodPurchasesAmount } =
  foodPurchasesAmountSlice.actions;

export default foodPurchasesAmountSlice.reducer;

export const foodPurchasesCount = (state: RootState) =>
  state.foodPurchasesAmount.value;
