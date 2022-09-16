import { FC, Fragment, useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

import { PurchaseTile } from "../purchases/PurchaseTile";

// currently doesn't delete purchases

export const SupabasePurchasesList: FC = () => {
  const pastDbPurchases: Array<any> = [];
  const [allPurchases, setAllPurchases] = useState<Array<any>>([]);
  const [userId, setUserId] = useState<string>("");

  const receiveUserIdSupabase = () => {
    const user = supabase.auth.getUser();
    user
      .then((res) => {
        const userData = res.data;

        return userData;
      })
      .then((data) => {
        const loggedInUserId = `${data.user?.id}`;
        setUserId(loggedInUserId);

        return userId;
      });
  };

  receiveUserIdSupabase();

  useEffect(() => {
    supabase
      .from("purchase-inputs-development")
      .select("*")
      .eq("user_id", `${userId}`)
      .then((res) => {
        const items = res.data;
        pastDbPurchases.push(items);
        return { items, pastDbPurchases };
      })
      .then((data) => {
        setAllPurchases(data.pastDbPurchases[0]);
        return allPurchases;
      });
  });

  useEffect(() => {
    supabase
      .channel(`public:purchase-inputs-development:id=eq.${userId}`)
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "purchase-inputs-development",
          filter: `user_id=eq.${userId}`,
        },
        (payload: any) => {
          const purchasePayload = {
            name: payload.new.purchase_name,
            amount: payload.new.purchase_amount,
            category: payload.new.purchase_category,
            date: payload.new.created_at,
            id: payload.new.id,
            isNecessary: payload.new.necessary_purchase,
          };

          setAllPurchases((prevPurchases) => [
            ...prevPurchases,
            purchasePayload,
          ]);

          console.log("Change received!", payload.new);
        }
      )
      .subscribe();
  }, [userId]);

  return (
    <div style={styles.purchasesList}>
      <h1 style={styles.allPurchasesHeader}> All Purchases</h1>
      <div style={styles.purchases}>
        {allPurchases.length > 0 ? (
          allPurchases.map((purchase, index) => (
            <Fragment key={index}>
              <PurchaseTile
                category={purchase.purchase_category}
                id={purchase.id}
                name={purchase.purchase_name}
                amount={purchase.purchase_amount}
                isNecessity={purchase.necessary_purchase}
                date={purchase.created_at}
              />
            </Fragment>
          ))
        ) : (
          <h4 style={styles.loadingPurchasesText}>Loading Purchases...</h4>
        )}
      </div>
    </div>
  );
};

const styles = {
  purchasesList: {
    display: "grid",
    backgroundColor: "#37273f",
    margin: "1rem",
    borderRadius: "30px",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.4)",
    justifyContent: "center",
    height: "47vh",
    overflow: "scroll",
    paddingBottom: "2rem",
  },
  purchases: {
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "center",
  },
  allPurchasesHeader: {
    textDecoration: "underline",
    color: "white",
  },
  loadingPurchasesText: {
    color: "white",
  },
} as const;
