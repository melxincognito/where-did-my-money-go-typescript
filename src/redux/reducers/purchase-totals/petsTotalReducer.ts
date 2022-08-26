import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialPetsPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const petsPurchasesAmountSlice = createSlice({
  name: "petsPurchasesAmount",
  initialState: initialPetsPurchaseAmountsState,
  reducers: {
    increasePetsPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreasePetsPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { decreasePetsPurchasesAmount, increasePetsPurchasesAmount } =
  petsPurchasesAmountSlice.actions;

export default petsPurchasesAmountSlice.reducer;

export const petsPurchasesCount = (state: RootState) =>
  state.petsPurchasesAmount.value;
