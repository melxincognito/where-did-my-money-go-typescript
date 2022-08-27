import React, { FC, useEffect } from "react";
import { useAppSelector } from "../redux/hooks";
import { necessaryPurchasesCount } from "../redux/reducers/purchase-totals/necessityTotalReducer";
import { wantsPurchasesCount } from "../redux/reducers/purchase-totals/wantsTotalReducer";
import { PurchaseCategories } from "../Enums";

import { housingPurchasesCount } from "../redux/reducers/purchase-totals/housingTotalReducer";
import { transportationPurchasesCount } from "../redux/reducers/purchase-totals/transportationTotalReducer";
import { medicalPurchasesCount } from "../redux/reducers/purchase-totals/medicalTotalReducer";
import { foodPurchasesCount } from "../redux/reducers/purchase-totals/foodTotalReducer";
import { entertainmentPurchasesCount } from "../redux/reducers/purchase-totals/entertainmentTotalReducer";
import { petsPurchasesCount } from "../redux/reducers/purchase-totals/petsTotalReducer";
import { otherPurchasesCount } from "../redux/reducers/purchase-totals/otherTotalReducer";

const mermaid = require("mermaid");

mermaid.initialize({
  startOnLoad: true,
  htmlLabels: true,
});

interface MermaidInterface {
  piechart: React.ReactNode;
}

const Mermaid: FC<MermaidInterface> = ({ piechart }) => {
  useEffect(() => {
    mermaid.contentLoaded();
  }, [piechart]);

  return (
    <div className="mermaid" id="mermaid">
      {piechart}
    </div>
  );
};

export const ChartsPage: FC = () => {
  const wantsPurchaseTotal: number = useAppSelector(wantsPurchasesCount);
  const necessaryPurchaseTotal: number = useAppSelector(
    necessaryPurchasesCount
  );

  const housingPurchaseTotal: number = useAppSelector(housingPurchasesCount);
  const transportationPurchaseTotal: number = useAppSelector(
    transportationPurchasesCount
  );
  const medicalPurchaseTotal: number = useAppSelector(medicalPurchasesCount);
  const foodPurchaseTotal: number = useAppSelector(foodPurchasesCount);
  const entertainmentPurchaseTotal: number = useAppSelector(
    entertainmentPurchasesCount
  );
  const petsPurchaseTotal: number = useAppSelector(petsPurchasesCount);
  const otherPurchaseTotal: number = useAppSelector(otherPurchasesCount);

  return (
    <div>
      <Mermaid
        piechart={`pie
        "Wants" : ${wantsPurchaseTotal}
        "Needs" : ${necessaryPurchaseTotal}
      `}
      />

      <Mermaid
        piechart={`pie 
        "Housing" : ${housingPurchaseTotal}
        "Transportation" : ${transportationPurchaseTotal}
        "Medical" : ${medicalPurchaseTotal}
        "Food" : ${foodPurchaseTotal}
        "Entertainment" : ${entertainmentPurchaseTotal}
        "Pets" : ${petsPurchaseTotal}
        "Other" : ${otherPurchaseTotal}
      `}
      />
    </div>
  );
};
