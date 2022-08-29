import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface PurchaseState {
  purchases: Array<{
    item: string;
    amount: number;
    isNecessity: boolean;
    id: string;
    category: string;
  }>;
}

const initialPurchasesState: PurchaseState = {
  purchases: [
    { item: "berry", amount: 23, isNecessity: true, id: "1", category: "Food" },
  ],
};

export const allPurchases = createSlice({
  name: "purchasesArray",
  initialState: initialPurchasesState,
  reducers: {
    addToPurchases: (
      state,
      action: PayloadAction<{
        item: string;
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
    removeFromPurchases: (
      state,
      action: PayloadAction<{ item: string; price: number }>
    ) => {
      state.purchases.filter(
        (purchase) => purchase.item !== action.payload.item
      );
    },
  },
});

export const { addToPurchases, removeFromPurchases } = allPurchases.actions;

export default allPurchases.reducer;

export const allPurchasesState = (state: RootState) =>
  state.allPurchases.purchases;
