import { useState, useEffect } from "react";

import { supabase } from "../supabaseClient";

interface Props {
  category: string;
}

/*
 .eq("purchase_category", `${category} `)

 There's a space in after the category variable in the useEffect function. Keep it there or it doesn't
 work to grab the items from the selected category. I don't know why, just leave it. 
*/

export function useSupabasePurchaseCategoriesList({ category }: Props) {
  const [categoryItems, setCategoryItems] = useState<Array<any>>([]);
  const [userId, setUserId] = useState<string>("");
  const items: Array<any> = [];

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
      .then((response) => {
        const data = response.data;
        items.push(data);

        return { data, items };
      })
      .then((data) => {
        setCategoryItems(data.items[0]);
        return categoryItems;
      });
  }, [userId]);

  return categoryItems;
}
