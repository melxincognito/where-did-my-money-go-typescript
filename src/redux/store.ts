import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import purchaseTotal from "./reducers/purchase-totals/purchaseTotalReducer";
import necessaryTotal from "./reducers/purchase-totals/necessityTotalReducer";
import wantsTotal from "./reducers/purchase-totals/wantsTotalReducer";
import housingTotal from "./reducers/purchase-totals/housingTotalReducer";
import transportationTotal from "./reducers/purchase-totals/transportationTotalReducer";
import medicalTotal from "./reducers/purchase-totals/medicalTotalReducer";
import foodTotal from "./reducers/purchase-totals/foodTotalReducer";
import entertainmentTotal from "./reducers/purchase-totals/entertainmentTotalReducer";
import petsTotal from "./reducers/purchase-totals/petsTotalReducer";
import otherTotal from "./reducers/purchase-totals/otherTotalReducer";

import purchases from "./reducers/purchase-states/allPurchases";

export const store = configureStore({
  reducer: {
    totalPurchasesAmount: purchaseTotal,
    necessaryPurchasesAmount: necessaryTotal,
    wantsPurchasesAmount: wantsTotal,
    housingPurchasesAmount: housingTotal,
    transportationPurchasesAmount: transportationTotal,
    medicalPurchasesAmount: medicalTotal,
    foodPurchasesAmount: foodTotal,
    entertainmentPurchasesAmount: entertainmentTotal,
    petsPurchasesAmount: petsTotal,
    otherPurchasesAmount: otherTotal,
    allPurchases: purchases,
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
