import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import purchaseAmountInput from "./inputValueSlice";

export const store = configureStore({
  reducer: {
    counter: purchaseAmountInput,
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
