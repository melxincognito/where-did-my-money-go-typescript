import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

interface Props {
  category: string;
}

export function useSupabasePurchaseCategoryTotalsCalculator({
  category,
}: Props) {
  const items: Array<any> = [];

  const [total, setTotal] = useState(0);
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
      .eq("user_id", userId)
      .eq("purchase_category", `${category} `)
      .select("purchase_amount")

      .then((response) => {
        const data = response.data;
        items.push(data);
        return { data, items };
      })
      .then((data) => {
        let total = 0;
        data.items[0].forEach((item: any) => {
          total += item.purchase_amount;
        });
        setTotal(total);
        return total;
      });
  }, [userId]);

  return total;
}
