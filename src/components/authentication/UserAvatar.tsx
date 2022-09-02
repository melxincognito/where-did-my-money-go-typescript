import { FC, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Tooltip,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

interface UserSettings {
  label: string;
  onClick: () => void;
  index: number;
}

export const UserAvatar: FC = (): JSX.Element => {
  const [userSettingsMenuOpen, setUserSettingsMenuOpen] =
    useState<null | HTMLElement>(null);

  const loggedInUser = useAuth0().user;
  const loggedInUserName = loggedInUser?.name;
  const loggedInUserImageUrl = loggedInUser?.picture;
  const logoutUser = useAuth0().logout;

  let navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserSettingsMenuOpen(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setUserSettingsMenuOpen(null);
  };

  const userSettings: Array<UserSettings> = [
    {
      label: "Profile",
      onClick: () => handleNavigate(`/user-profile`),
      index: 0,
    },
    {
      label: "Account",
      onClick: () => handleNavigate(`/user-account`),
      index: 1,
    },
    {
      label: "Logout",
      onClick: () => logoutUser({ returnTo: window.location.origin }),
      index: 2,
    },
  ];

  return (
    <Box>
      <Tooltip title="Open user settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={`${loggedInUserName}`}
            src={`${loggedInUserImageUrl}`}
            sx={styles.userAvatar}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={userSettingsMenuOpen}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(userSettingsMenuOpen)}
        onClose={handleCloseUserMenu}
      >
        {userSettings.map((setting) => (
          <MenuItem key={setting.index} onClick={setting.onClick}>
            <Typography textAlign="center">{setting.label}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

const styles = {
  userAvatar: {
    width: 56,
    height: 56,
    boxShadow: "0px 0px 15px 5px rgba(255,255,255,0.28)",
  },
} as const;
