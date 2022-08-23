import { ChangeEvent, FC, useState } from "react";

export interface Props {
  childToParent(inputPurchaseName: string, inputPurchaseAmount: number): any;
}

export const PurchaseInputForm: FC<Props> = ({ childToParent }) => {
  const [purchaseName, setPurchaseName] = useState<string>("");
  const [purchaseAmount, setPurchaseAmount] = useState<number>(0);
  //let purchaseCategory: Array<{ index: number; categoryName: string }>;

  const handleChangePurchaseName = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseName(e.target.value);
  };

  const handleChangePurchaseAmount = (e: ChangeEvent<HTMLInputElement>) => {
    setPurchaseAmount(Number(e.target.value));
  };

  return (
    <div>
      <div
        style={{
          display: "grid",
          justifyContent: "center",
        }}
      >
        <input
          placeholder="Purchase Name"
          onChange={handleChangePurchaseName}
        />
        <input
          placeholder="Purchase Amount"
          onChange={handleChangePurchaseAmount}
        />
      </div>
      <button onMouseDown={childToParent(purchaseName, purchaseAmount)}>
        {" "}
        submit purchase
      </button>
      <div>
        <h1>{purchaseName}</h1>
        <h1>{purchaseAmount}</h1>
      </div>
    </div>
  );
};

/*
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const CategorySelectorInput: FC = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

const categories: Array<{ category: string; id: number }> = [
  {
    category: "HOUSING",
    id: 0,
  },
  {
    category: "TRANSPORTATION",
    id: 1,
  },
  {
    category: "FOOD",
    id: 2,
  },
  {
    category: "PERSONAL CARE",
    id: 3,
  },
  {
    category: "ENTERTAINMENT",
    id: 4,
  },
  {
    category: "PETS",
    id: 5,
  },
  {
    category: "ALCOHOL",
    id: 6,
  },
];

const OtherCategorySelector: FC = () => {
  const [category, setCategory] = useState<string>("PETS");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value);
  };
  return (
    <div>
      <FormControl>
        <InputLabel>Category</InputLabel>
        <Select
          value={category}
          input={<OutlinedInput label="Category" />}
          sx={{ width: 250 }}
        >
          <div style={{ height: "10em" }}>
            {categories.map((item) => (
              <MenuItem
                aria-label={item.category}
                key={item.id}
                value={item.category}
              >
                {item.category}
              </MenuItem>
            ))}
          </div>
        </Select>
      </FormControl>
      <div>
        <h1>{category} </h1>
      </div>
    </div>
  );
};*/
