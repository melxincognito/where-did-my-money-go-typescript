import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";

import { Purchase } from "../../../Interfaces";

interface PurchaseCategorizedState {
  housingPurchasesArray: Array<Purchase>;
  transportationPurchasesArray: Array<Purchase>;
  medicalPurchasesArray: Array<Purchase>;
  foodPurchasesArray: Array<Purchase>;
  entertainmentPurchasesArray: Array<Purchase>;
  petsPurchasesArray: Array<Purchase>;
  otherPurchasesArray: Array<Purchase>;
}

const initialPurchasesCategorizedState: PurchaseCategorizedState = {
  housingPurchasesArray: [],
  transportationPurchasesArray: [],
  medicalPurchasesArray: [],
  foodPurchasesArray: [],
  entertainmentPurchasesArray: [],
  petsPurchasesArray: [],
  otherPurchasesArray: [],
};

export const purchasesCategorized = createSlice({
  name: "purchasesCategorized",
  initialState: initialPurchasesCategorizedState,
  reducers: {
    addToHousingPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        housingPurchasesArray: [...state.housingPurchasesArray, action.payload],
      };
    },
    addToTransportationPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        transportationPurchasesArray: [
          ...state.transportationPurchasesArray,
          action.payload,
        ],
      };
    },
    addToMedicalPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        medicalPurchasesArray: [...state.medicalPurchasesArray, action.payload],
      };
    },

    addToFoodPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        foodPurchasesArray: [...state.foodPurchasesArray, action.payload],
      };
    },

    addToEntertainmentPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        entertainmentPurchasesArray: [
          ...state.entertainmentPurchasesArray,
          action.payload,
        ],
      };
    },

    addToPetsPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        petsPurchasesArray: [...state.petsPurchasesArray, action.payload],
      };
    },

    addToOtherPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        otherPurchasesArray: [...state.otherPurchasesArray, action.payload],
      };
    },

    // remove from purchases doesnt work currently

    removeFromHousingPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        housingPurchasesArray: state.housingPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },
    removeFromTransportationPurchases: (
      state,
      action: PayloadAction<Purchase>
    ) => {
      return {
        ...state,
        transportationPurchasesArray: state.transportationPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },

    removeFromMedicalPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        medicalPurchasesArray: state.medicalPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },

    removeFromFoodPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        foodPurchasesArray: state.foodPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },
    removeFromEntertainmentPurchases: (
      state,
      action: PayloadAction<Purchase>
    ) => {
      return {
        ...state,
        entertainmentPurchasesArray: state.entertainmentPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },

    removeFromPetsPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        petsPurchasesArray: state.petsPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },

    removeFromOtherPurchases: (state, action: PayloadAction<Purchase>) => {
      return {
        ...state,
        otherPurchasesArray: state.otherPurchasesArray.filter(
          (purchase) => purchase.id !== action.payload.id
        ),
      };
    },
  },
});

export const {
  addToHousingPurchases,
  addToTransportationPurchases,
  addToMedicalPurchases,
  addToFoodPurchases,
  addToEntertainmentPurchases,
  addToPetsPurchases,
  addToOtherPurchases,
  removeFromHousingPurchases,
  removeFromTransportationPurchases,
  removeFromMedicalPurchases,
  removeFromFoodPurchases,
  removeFromEntertainmentPurchases,
  removeFromPetsPurchases,
  removeFromOtherPurchases,
} = purchasesCategorized.actions;

export default purchasesCategorized.reducer;

export const housingPurchasesState = (state: RootState) =>
  state.purchasesCategorized.housingPurchasesArray;

export const transportationPurchasesState = (state: RootState) =>
  state.purchasesCategorized.transportationPurchasesArray;

export const medicalPurchasesState = (state: RootState) =>
  state.purchasesCategorized.medicalPurchasesArray;

export const foodPurchasesState = (state: RootState) =>
  state.purchasesCategorized.foodPurchasesArray;

export const entertainmentPurchasesState = (state: RootState) =>
  state.purchasesCategorized.entertainmentPurchasesArray;

export const petsPurchasesState = (state: RootState) =>
  state.purchasesCategorized.petsPurchasesArray;

export const otherPurchasesState = (state: RootState) =>
  state.purchasesCategorized.otherPurchasesArray;
