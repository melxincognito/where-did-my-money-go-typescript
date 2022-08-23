import { FC, useState, ChangeEvent } from "react";

import { Currencies } from "../Enums";

interface Props {
  name: string;
  age?: number;
  email: string;
  currency: Currencies;
}

export const Person: FC<Props> = ({ name, email, age, currency }) => {
  const [country, setCountry] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value.toLowerCase());
  };

  type IsImportant = "Yes" | "No";

  const isitImportant: IsImportant = "Yes";

  return (
    <div>
      <h1> {name}</h1>
      <h2> {email}</h2>
      <h3>{age ? age : 7}</h3>

      <input placeholder="write your country" onChange={handleChange} />

      {country}

      {currency}
    </div>
  );
};
