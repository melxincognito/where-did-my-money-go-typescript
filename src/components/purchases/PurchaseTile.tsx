import { FC } from "react";

import { useAppDispatch } from "../../redux/hooks";
import { removeFromPurchases } from "../../redux/reducers/purchase-states/allPurchases";
import {
  removeFromHousingPurchases,
  removeFromMedicalPurchases,
  removeFromTransportationPurchases,
  removeFromFoodPurchases,
  removeFromEntertainmentPurchases,
  removeFromPetsPurchases,
  removeFromOtherPurchases,
} from "../../redux/reducers/purchase-states/purchasesCategorized";
import { decreaseTotalPurchasesAmount } from "../../redux/reducers/purchase-totals/purchaseTotalReducer";
import { decreaseNecessaryPurchasesAmount } from "../../redux/reducers/purchase-totals/necessityTotalReducer";
import { decreaseWantsPurchasesAmount } from "../../redux/reducers/purchase-totals/wantsTotalReducer";
import { decreaseHousingPurchasesAmount } from "../../redux/reducers/purchase-totals/housingTotalReducer";
import { decreaseTransportationPurchasesAmount } from "../../redux/reducers/purchase-totals/transportationTotalReducer";
import { decreaseFoodPurchasesAmount } from "../../redux/reducers/purchase-totals/foodTotalReducer";
import { decreaseMedicalPurchasesAmount } from "../../redux/reducers/purchase-totals/medicalTotalReducer";
import { decreaseEntertainmentPurchasesAmount } from "../../redux/reducers/purchase-totals/entertainmentTotalReducer";
import { decreasePetsPurchasesAmount } from "../../redux/reducers/purchase-totals/petsTotalReducer";
import { decreaseOtherPurchasesAmount } from "../../redux/reducers/purchase-totals/otherTotalReducer";

import { Box, Button } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

export interface Props {
  id: string;
  name: string;
  amount: number;
  isNecessity: boolean;
  category: string;
  date: string;
}

export const PurchaseTile: FC<Props> = ({
  id,
  name,
  amount,
  isNecessity,
  category,
  date,
}) => {
  const choosePurchaseCategoryIcon = (category: string) => {
    switch (category) {
      case "Housing": {
        return <HomeOutlinedIcon fontSize="large" />;
      }
      case "Transportation": {
        return <DirectionsCarFilledOutlinedIcon fontSize="large" />;
      }
      case "Medical": {
        return <LocalHospitalOutlinedIcon fontSize="large" />;
      }
      case "Food": {
        return <RestaurantOutlinedIcon fontSize="large" />;
      }
      case "Entertainment": {
        return <EmojiEmotionsOutlinedIcon fontSize="large" />;
      }
      case "Pets": {
        return <PetsOutlinedIcon fontSize="large" />;
      }
      case "Other": {
        return <YardOutlinedIcon fontSize="large" />;
      }
      default: {
        return <YardOutlinedIcon fontSize="large" />;
      }
    }
  };

  const formatDate = (date: string) => {
    if (date === undefined) {
      return "01-01-2001";
    } else {
      // take the first 10 characters of the full date string
      const sliceDate = date?.slice(0, 10).split("-");
      // split each array element
      const year = sliceDate[0];
      const month = sliceDate[1];
      const day = sliceDate[2];

      // return the date in the format of MM/DD/YYYY
      return `${month}-${day}-${year}`;
    }
  };

  const capitalizePurchaseName = (name: string) => {
    if (name === undefined) {
      return "Name";
    } else {
      return name?.charAt(0).toUpperCase() + name.slice(1);
    }
  };

  const formatPurchaseAmount = (amount: number) => {
    if (amount === undefined) {
      return "$0.00";
    } else {
      return `$${amount.toFixed(2)}`;
    }
  };

  var categoryIcon = choosePurchaseCategoryIcon(category);
  var formattedDate = formatDate(date);
  var capitalizedPurchaseName = capitalizePurchaseName(name);
  var formattedPurchaseAmount = formatPurchaseAmount(amount);
  const dispatch = useAppDispatch();

  // remove from the main purchases list and update the total purchase amounts
  const removeFromPurchasesRedux = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string,
    date: string
  ) => {
    dispatch(
      removeFromPurchases({
        purchase: name,
        amount: amount,
        isNecessity: isNecessity,
        id: id,
        category: category,
        date: date,
      })
    );
  };

  const adjustPurchaseAmount = (amount: number, isNecessity: boolean) => {
    dispatch(decreaseTotalPurchasesAmount(amount));

    switch (isNecessity) {
      case true:
        dispatch(decreaseNecessaryPurchasesAmount(amount));
        break;
      case false:
        dispatch(decreaseWantsPurchasesAmount(amount));
        break;
      default:
        break;
    }
  };

  const removeFromPurchaseCategoryRedux = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    switch (category) {
      case "Housing": {
        dispatch(
          removeFromHousingPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseHousingPurchasesAmount(amount));
        break;
      }
      case "Transportation": {
        dispatch(
          removeFromTransportationPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseTransportationPurchasesAmount(amount));
        break;
      }
      case "Medical": {
        dispatch(
          removeFromMedicalPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseMedicalPurchasesAmount(amount));
        break;
      }
      case "Food": {
        dispatch(
          removeFromFoodPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseFoodPurchasesAmount(amount));
        break;
      }
      case "Entertainment": {
        dispatch(
          removeFromEntertainmentPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseEntertainmentPurchasesAmount(amount));
        break;
      }
      case "Pets": {
        dispatch(
          removeFromPetsPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreasePetsPurchasesAmount(amount));
        break;
      }
      default: {
        dispatch(
          removeFromOtherPurchases({
            purchase: name,
            amount: amount,
            isNecessity: isNecessity,
            id: id,
            category: category,
            date: date,
          })
        );
        dispatch(decreaseOtherPurchasesAmount(amount));
        break;
      }
    }
  };

  const deletePurchase = (
    name: string,
    amount: number,
    isNecessity: boolean,
    id: string,
    category: string
  ) => {
    removeFromPurchasesRedux(name, amount, isNecessity, id, category, date);
    removeFromPurchaseCategoryRedux(name, amount, isNecessity, id, category);
    adjustPurchaseAmount(amount, isNecessity);
  };

  return (
    <Box sx={styles.purchaseTile} id={category}>
      <span style={styles.dateSpan}>{formattedDate} </span>{" "}
      <span style={styles.categoryIconSpan}>
        {" "}
        {category} {categoryIcon}{" "}
      </span>
      <div style={styles.headerContent}>
        <h2 style={styles.purchaseName}>
          <span aria-label="Purchase name">{capitalizedPurchaseName}</span>
        </h2>{" "}
        <h3 style={styles.purchaseAmount}>
          <span aria-label="Purchase amount"> {formattedPurchaseAmount} </span>
        </h3>{" "}
      </div>
      <div style={styles.extraContent}>
        {isNecessity ? (
          <div style={styles.necessaryPurchaseTile}> Necessary Purchase </div>
        ) : (
          <div style={styles.wantsPurchaseTile}> Wants Purchase </div>
        )}

        <Button
          sx={styles.deletePurchaseButton}
          aria-label="Delete purchase"
          variant="contained"
          onClick={() =>
            deletePurchase(name, amount, isNecessity, id, category)
          }
        >
          delete
        </Button>
      </div>
    </Box>
  );
};

const styles = {
  purchaseTile: {
    width: { xs: "200px", md: "300px" },
    height: "11rem",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    padding: "1.5rem",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
  },
  headerContent: {
    display: "block",
    justifyContent: "center",
    alignItems: "center",
  },
  extraContent: {
    position: "relative",
    top: "0.5rem",
  },
  dateSpan: {
    display: "flex",
    position: "absolute",
    left: "1rem",
    top: "0.7rem",
    color: "#b0b0b0",
    textDecoration: "underline",
    fontWeight: "bold",
  },
  categoryIconSpan: {
    position: "absolute",
    right: "1rem",
    top: "0.3rem",
    color: "black",
  },
  purchaseName: {
    color: "white",
  },
  purchaseAmount: {
    color: "#4ead00",
    textDecoration: "underline",
  },
  necessaryPurchaseTile: {
    color: "black",
    backgroundColor: "rgba(255, 255, 255, 0.88)",
    marginBottom: "5px",
    padding: "0.1rem 1rem",
    borderRadius: "30px",
  },
  wantsPurchaseTile: {
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.88)",
    marginBottom: "5px",
    padding: "0.1rem 1rem",
    borderRadius: "30px",
  },
  deletePurchaseButton: {
    borderRadius: "30px",
    width: "100%",
    border: "1px solid rgba(255, 255, 255, 0.27)",
  },
} as const;
