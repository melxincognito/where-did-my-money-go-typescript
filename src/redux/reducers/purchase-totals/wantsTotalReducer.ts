import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialWantsPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const wantsPurchasesAmountSlice = createSlice({
  name: "wantsPurchasesAmount",
  initialState: initialWantsPurchaseAmountsState,
  reducers: {
    increaseWantsPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseWantsPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decreaseWantsPurchasesAmount, increaseWantsPurchasesAmount } =
  wantsPurchasesAmountSlice.actions;

export default wantsPurchasesAmountSlice.reducer;

export const wantsPurchasesCount = (state: RootState) =>
  state.wantsPurchasesAmount.value;
