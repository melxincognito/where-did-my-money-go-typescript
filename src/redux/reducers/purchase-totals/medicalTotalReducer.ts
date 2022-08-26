import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { PurchasesAmountStates } from "../../../Interfaces";

const initialMedicalPurchaseAmountsState: PurchasesAmountStates = {
  value: 0,
};

export const medicalPurchasesAmountSlice = createSlice({
  name: "medicalPurchasesAmount",
  initialState: initialMedicalPurchaseAmountsState,
  reducers: {
    increaseMedicalPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decreaseMedicalPurchasesAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const {
  decreaseMedicalPurchasesAmount,
  increaseMedicalPurchasesAmount,
} = medicalPurchasesAmountSlice.actions;

export default medicalPurchasesAmountSlice.reducer;

export const medicalPurchasesCount = (state: RootState) =>
  state.medicalPurchasesAmount.value;
