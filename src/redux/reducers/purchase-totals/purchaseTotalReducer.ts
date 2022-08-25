import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const totalPurchasesAmountSlice = createSlice({
  name: "totalPurchasesAmount",
  initialState: initialPurchaseAmountsState,
  reducers: {
    increaseTotalPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseTotalPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decreaseTotalPurchasesAmount, increaseTotalPurchasesAmount } =
  totalPurchasesAmountSlice.actions;

export default totalPurchasesAmountSlice.reducer;

export const totalPurchasesCount = (state: RootState) =>
  state.totalPurchasesAmount.value;
