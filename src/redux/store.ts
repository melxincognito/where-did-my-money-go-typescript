import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import purchaseTotal from "./reducers/purchase-totals/purchaseTotalReducer";
import necessaryTotal from "./reducers/purchase-totals/necessityTotalReducer";
import wantsTotal from "./reducers/purchase-totals/wantsTotalReducer";

export const store = configureStore({
  reducer: {
    totalPurchasesAmount: purchaseTotal,
    necessaryPurchasesAmount: necessaryTotal,
    wantsPurchasesAmount: wantsTotal,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
