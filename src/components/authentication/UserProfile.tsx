import { useEffect, useState, useCallback } from "react";

import { supabase } from "../../supabaseClient";

export const UserProfile = () => {
  const [userName, setUserName] = useState<string>("");
  const [userImageUrl, setUserImageUrl] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const checkIfUserInformationExists = useCallback(() => {
    return userName === "" && userImageUrl === "" && userEmail === "";
  }, [userName, userImageUrl, userEmail]);

  const checkIfDataLoaded = useCallback(() => {
    if (checkIfUserInformationExists()) {
      setLoading(true);
      return loading;
    } else {
      setLoading(false);
      return loading;
    }
  }, [checkIfUserInformationExists, loading]);

  useEffect(() => {
    const user = supabase.auth.getUser();
    user
      .then((res) => {
        const userData = res.data;
        return userData;
      })
      .then((data) => {
        const loggedInUserName = `${data.user?.user_metadata.name}`;
        const loggedInUserImage = `${data.user?.user_metadata.avatar_url}`;
        const loggedInUserEmail = `${data.user?.email}`;
        setUserName(loggedInUserName);
        setUserImageUrl(loggedInUserImage);
        setUserEmail(loggedInUserEmail);
        checkIfDataLoaded();
        return { userName, userImageUrl, userEmail };
      });
  }, [userName, userImageUrl, userEmail, checkIfDataLoaded]);

  return (
    <>
      {loading ? (
        <h3> Loading...</h3>
      ) : (
        <div style={styles.container}>
          <div style={styles.userProfile}>
            <img
              src={`${userImageUrl}`}
              alt={`${userName}`}
              style={styles.image}
            />
            <h1>{userName}</h1>
            <p> {userEmail} </p>
          </div>
        </div>
      )}
    </>
  );
};

const styles = {
  container: {
    display: "grid",
    justifyItems: "center",
  },
  userProfile: {
    padding: "2rem",
    width: "50%",
    backgroundColor: "rgba(255, 255, 255, 0.13)",
    backdropFilter: "blur(5px)",
    boxShadow: "0 0 40px rgba(8, 7, 16, 0.6)",
    border: "2px solid rgba(255, 255, 255, 0.17)",
    borderRadius: "20px",
  },
  image: {
    borderRadius: "50%",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.29)",
  },
} as const;
