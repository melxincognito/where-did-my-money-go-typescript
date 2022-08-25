import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialNecessaryPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const necessaryPurchasesAmountSlice = createSlice({
  name: "necessaryPurchasesAmount",
  initialState: initialNecessaryPurchaseAmountsState,
  reducers: {
    increaseNecessaryPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    },
    decreaseNecessaryPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
  },
});

export const {
  decreaseNecessaryPurchasesAmount,
  increaseNecessaryPurchasesAmount,
} = necessaryPurchasesAmountSlice.actions;

export default necessaryPurchasesAmountSlice.reducer;

export const necessaryPurchasesCount = (state: RootState) =>
  state.necessaryPurchasesAmount.value;
