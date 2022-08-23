import { FC } from "react";

export interface Props {
  name: string;
  amount: number;
}

export const PurchaseTile: FC<Props> = ({ name, amount }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "pink",
        display: "grid",
        textAlign: "center",
      }}
    >
      <h1>{name}</h1>
      <h2>${amount}</h2>
    </div>
  );
};
