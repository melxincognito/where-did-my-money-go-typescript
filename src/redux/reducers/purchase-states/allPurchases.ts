import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface PurchaseState {
  purchases: Array<{
    purchase: string;
    amount: number;
    isNecessity: boolean;
    id: string;
    category: string;
  }>;
}

const initialPurchasesState: PurchaseState = {
  purchases: [
    {
      purchase: "berry",
      amount: 23,
      isNecessity: true,
      id: "1",
      category: "Food",
    },
  ],
};

export const allPurchases = createSlice({
  name: "purchasesArray",
  initialState: initialPurchasesState,
  reducers: {
    addToPurchases: (
      state,
      action: PayloadAction<{
        purchase: string;
        amount: number;
        isNecessity: boolean;
        id: string;
        category: string;
      }>
    ) => {
      return {
        ...state,
        purchases: [...state.purchases, action.payload],
      };
    },

    // remove from purchases doesnt work currently
    removeFromPurchases: (
      state,
      action: PayloadAction<{ purchase: string; price: number }>
    ) => {
      state.purchases.filter(
        (purchase) => purchase.purchase !== action.payload.purchase
      );
    },
  },
});

export const { addToPurchases, removeFromPurchases } = allPurchases.actions;

export default allPurchases.reducer;

export const allPurchasesState = (state: RootState) =>
  state.allPurchases.purchases;
