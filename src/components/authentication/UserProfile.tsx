import { FC } from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const UserProfile: FC = () => {
  const user = useAuth0().user;

  const name = user?.name;
  const email = user?.email;
  const imageUrl = user?.picture;

  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <>
      {isAuthenticated && (
        <div style={styles.userProfile}>
          <img src={`${imageUrl}`} alt={`${name}`} style={styles.image} />
          <h1>{name}</h1>

          <p> {email} </p>
        </div>
      )}
    </>
  );
};

const styles = {
  userProfile: {
    padding: "2rem",
    border: "3px solid #ccc",
  },
  image: {
    borderRadius: "50%",
  },
} as const;
