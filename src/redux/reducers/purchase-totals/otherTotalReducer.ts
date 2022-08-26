import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialOtherPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const otherPurchasesAmountSlice = createSlice({
  name: "otherPurchasesAmount",
  initialState: initialOtherPurchaseAmountsState,
  reducers: {
    increaseOtherPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseOtherPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decreaseOtherPurchasesAmount, increaseOtherPurchasesAmount } =
  otherPurchasesAmountSlice.actions;

export default otherPurchasesAmountSlice.reducer;

export const otherPurchasesCount = (state: RootState) =>
  state.otherPurchasesAmount.value;
