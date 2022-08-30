export interface Purchase {
  purchase: string;
  amount: number;
  isNecessity: boolean;
  id: string;
  category: string;
  date: string;
}

export interface PurchasesAmountStates {
  value: number;
}
