export interface Purchase {
  purchase: string;
  amount: number;
  isNecessity: boolean;
  id: string;
  category: string;
}

export interface PurchasesAmountStates {
  value: number;
}
