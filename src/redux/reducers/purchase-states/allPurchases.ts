import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { Purchase } from "../../../Interfaces";

interface PurchaseState {
  purchases: Array<Purchase>;
}

const initialPurchasesState: PurchaseState = {
  purchases: [],
};

export const allPurchases = createSlice({
  name: "purchasesArray",
  initialState: initialPurchasesState,
  reducers: {
    addToPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    },

    removeFromPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        purchases: state.purchases.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },
  },
});

export const { addToPurchases, removeFromPurchases } = allPurchases.actions;

export default allPurchases.reducer;

export const allPurchasesState = (state: RootState) =>
  state.allPurchases.purchases;
