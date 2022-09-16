import { FC } from "react";
import { supabase } from "../../supabaseClient";

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
    let sliceDate = date ? date.slice(0, 10).split("-") : "";
    let year = sliceDate ? sliceDate[0] : "2001";
    let month = sliceDate ? sliceDate[1] : "01";
    let day = sliceDate ? sliceDate[2] : "01";
    let formattedDate = `${month}-${day}-${year}`;

    return formattedDate;
  };

  const capitalizePurchaseName = (name: string) => {
    let capitalizedName = name
      ? name.charAt(0).toUpperCase() + name.slice(1)
      : "Purchase";

    return capitalizedName;
  };

  const formatPurchaseAmount = (amount: number) => {
    let formattedAmount = amount ? `$${amount.toFixed(2)}` : "$0.00";
    return formattedAmount;
  };

  const deleteItem = async () => {
    const { data, error } = await supabase
      .from("purchase-inputs-development")
      .delete()
      .match({ id: id });

    if (data) {
      console.log(data);
    }
    if (error) {
      console.log(error);
    }
  };

  const categoryIcon = choosePurchaseCategoryIcon(category);
  const formattedDate = formatDate(date);
  const capitalizedPurchaseName = capitalizePurchaseName(name);
  const formattedPurchaseAmount = formatPurchaseAmount(amount);

  return (
    <Box sx={styles.purchaseTile} id={category}>
      <span style={styles.dateSpan}>{formattedDate} </span>{" "}
      <span style={styles.categoryIconSpan}> {categoryIcon} </span>
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
          onClick={deleteItem}
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
