import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialHousingPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const housingPurchasesAmountSlice = createSlice({
  name: "housingPurchasesAmount",
  initialState: initialHousingPurchaseAmountsState,
  reducers: {
    increaseHousingPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseHousingPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  decreaseHousingPurchasesAmount,
  increaseHousingPurchasesAmount,
} = housingPurchasesAmountSlice.actions;

export default housingPurchasesAmountSlice.reducer;

export const housingPurchasesCount = (state: RootState) =>
  state.housingPurchasesAmount.value;
