import React, { useState } from "react";

import { PurchaseTile } from "./PurchaseTile";

import { Purchase } from "../Interfaces";

export const PurchasesList = () => {
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  return <div>PurchasesList</div>;
};
