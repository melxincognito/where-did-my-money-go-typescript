import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialEntertainmentPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const entertainmentPurchasesAmountSlice = createSlice({
  name: "entertainmentPurchasesAmount",
  initialState: initialEntertainmentPurchaseAmountsState,
  reducers: {
    increaseEntertainmentPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    },
    decreaseEntertainmentPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
  },
});

export const {
  decreaseEntertainmentPurchasesAmount,
  increaseEntertainmentPurchasesAmount,
} = entertainmentPurchasesAmountSlice.actions;

export default entertainmentPurchasesAmountSlice.reducer;

export const entertainmentPurchasesCount = (state: RootState) =>
  state.entertainmentPurchasesAmount.value;
