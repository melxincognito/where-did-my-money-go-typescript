import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialTransportationPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const transportationPurchasesAmountSlice = createSlice({
  name: "transportationPurchasesAmount",
  initialState: initialTransportationPurchaseAmountsState,
  reducers: {
    increaseTransportationPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value += action.payload;
    },
    decreaseTransportationPurchasesAmount: (
      state,
      action: PayloadAction<number>
    ) => {
      state.value -= action.payload;
    },
  },
});

export const {
  decreaseTransportationPurchasesAmount,
  increaseTransportationPurchasesAmount,
} = transportationPurchasesAmountSlice.actions;

export default transportationPurchasesAmountSlice.reducer;

export const transportationPurchasesCount = (state: RootState) =>
  state.transportationPurchasesAmount.value;
