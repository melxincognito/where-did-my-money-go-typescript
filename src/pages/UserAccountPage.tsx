import React, { useState } from "react";

import {
  Card,
  Switch,
  TextField,
  Box,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

interface LanguageOptions {
  value: string;
  label: string;
  index: number;
}

interface CurrencyOptions {
  value: string;
  label: string;
  index: number;
}

interface AccountSelectionOptions {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  options: Array<CurrencyOptions | LanguageOptions>;
}

export const UserAccountPage = () => {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  const [language, setLanguage] = useState<string>("EN");
  const [currency, setCurrency] = useState<string>("USD");

  const handleChangeTheme = (): boolean => {
    setDarkTheme(!darkTheme);
    return darkTheme;
  };

  const createThemeLabel = (): string => {
    return darkTheme ? "Dark" : "Light";
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLanguage(event.target.value);
  };

  const handleCurrencyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrency(event.target.value);
  };

  const accountSelectionOptions: Array<AccountSelectionOptions> = [
    {
      label: "Select language",
      value: language,
      onChange: handleLanguageChange,
      options: languageOptions,
    },
    {
      label: "Select Currency",
      value: currency,
      onChange: handleCurrencyChange,
      options: currencyOptions,
    },
  ];

  return (
    <Box sx={styles.pageContainer}>
      <Card sx={styles.card}>
        <Box sx={styles.accountOptionsContainer}>
          <h1>Account Options</h1>
          <FormControlLabel
            control={
              <Switch
                sx={{ m: 1 }}
                onClick={handleChangeTheme}
                checked={darkTheme}
              />
            }
            label={"Theme - " + createThemeLabel()}
          />

          {accountSelectionOptions.map((option, index) => (
            <TextField
              key={index}
              label={option.label}
              value={option.value}
              onChange={option.onChange}
              InputProps={{
                disableUnderline: true,
                sx: styles.selectorInputProps,
              }}
              sx={styles.selector}
              variant="standard"
              select
            >
              {option.options.map((option) => (
                <MenuItem key={option.index} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          ))}
        </Box>
      </Card>
    </Box>
  );
};

const languageOptions: Array<LanguageOptions> = [
  {
    value: "EN",
    label: "English",
    index: 0,
  },
  {
    value: "ES",
    label: "Español",
    index: 1,
  },
  {
    value: "PT",
    label: "Português",
    index: 2,
  },
];

const currencyOptions: Array<CurrencyOptions> = [
  {
    value: "USD",
    label: "$",
    index: 0,
  },
  {
    value: "EUR",
    label: "€",
    index: 1,
  },
  {
    value: "GBP",
    label: "£",
    index: 2,
  },
  {
    value: "BTC",
    label: "฿",
    index: 3,
  },
];

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  accountOptionsContainer: {
    display: "grid",
    width: { xs: "90%", md: "50%" },
    gap: "1rem",
    paddingBottom: "2rem",
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
    width: "90%",
  },

  selector: {
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
    padding: 0.22,
    display: "flex",
    "& label": { paddingLeft: "1rem" },
  },
  selectorInputProps: {
    textAlign: "left",
    paddingLeft: "1rem",
  },
} as const;
