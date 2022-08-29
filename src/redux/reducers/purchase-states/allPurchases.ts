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

    // remove from purchases doesnt work currently
    removeFromPurchases: (state, action: PayloadAction<Purchase>) => {
      state.purchases.filter((purchase) => purchase.id !== action.payload.id);
    },
  },
});

export const { addToPurchases, removeFromPurchases } = allPurchases.actions;

export default allPurchases.reducer;

export const allPurchasesState = (state: RootState) =>
  state.allPurchases.purchases;
