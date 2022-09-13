import React, { FC, useState } from "react";
import { CheckUserAuthentication } from "../../ProtectedRoutes";
import { supabase } from "../../supabaseClient";
import { UserAvatar } from "../authentication/UserAvatar";
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

function a11yProps(index: number) {
  return {
    id: `navigation-tab-${index}`,
    "aria-controls": `navigation-tabpanel-${index}`,
  };
}

export const Navigation: FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const [value, setValue] = useState(0);

  const userIsAuthenticated: boolean = true;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) alert("Error: " + error);
  }

  const navigationMenu: Array<{ label: string; route: string; index: number }> =
    [
      {
        label: "Home",
        route: "/",
        index: 0,
      },
      {
        label: "Categorized Purchases",
        route: "/categorized-purchases",
        index: 1,
      },
      {
        label: "Purchase Data",
        route: "/charts",
        index: 2,
      },
    ];

  return (
    <Box sx={styles.navBarContainer}>
      {userIsAuthenticated ? (
        <>
          <Box
            className="navDisplayIfUserAuthenticated"
            sx={styles.mobileNavMenu}
          >
            <IconButton
              size="large"
              aria-label="mobile-navigation-menu"
              aria-controls="mobile-menu-navigation"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box
                className="mobile-menu-items"
                sx={styles.mobileMenuItemsContainer}
              >
                {navigationMenu.map((menuItem) => (
                  <MenuItem sx={styles.mobileMenuItems} key={menuItem.index}>
                    <Link to={menuItem.route} style={styles.mobileLinkItem}>
                      {menuItem.label}
                    </Link>
                  </MenuItem>
                ))}{" "}
              </Box>
            </Menu>
          </Box>

          <Box sx={styles.logoContainer}>
            <h1> Where did my money go?</h1>
          </Box>
          <Box
            sx={styles.listContainer}
            aria-label="desktop-navigation-menu"
            aria-controls="desktop-menu-navigation"
            aria-haspopup="false"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={styles.tabs}
              aria-label="navigation tabs"
              indicatorColor="secondary"
              role="navigation-list"
            >
              {navigationMenu.map((item) => (
                <Tab
                  key={item.index}
                  label={<span style={styles.tabLabel}>{item.label}</span>}
                  to={item.route}
                  component={Link}
                  {...a11yProps(item.index)}
                />
              ))}
            </Tabs>
          </Box>
          <Box sx={{ padding: "1rem" }}>
            <UserAvatar />
          </Box>
        </>
      ) : (
        <>
          <Container
            className="navDisplayIfUserNotAuthenticated"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box sx={styles.logoContainerNotAuthenticated}>
              <h1> Where did my money go?</h1>
            </Box>
          </Container>
        </>
      )}
      <button onClick={signOut}> Sign out </button>
    </Box>
  );
};

const styles = {
  navBarContainer: {
    left: 0,
    right: 0,
    top: 0,
    height: { xs: "17vh", md: "13vh" },
    width: "100%",
    backgroundColor: "#191919",
    display: "flex",
    alignContent: "center",
    alignItems: "center",
    boxShadow: "0px 0px 15px 5px rgba(0,0,0,0.71)",
    marginBottom: "2rem",
    color: "white",
    justifyContent: "left",
  },
  mobileNavMenu: {
    display: { xs: "flex", md: "none" },
  },
  mobileMenuItemsContainer: {
    backgroundColor: "#37273f",
    width: "30vh",
    display: "grid",
    justifyContent: "center",
  },
  mobileMenuItems: {
    width: "30vh",
    display: "flex",
    justifyContent: "center",
    height: "7vh",
  },
  mobileLinkItem: {
    textDecoration: "none",
    color: "white",
  },

  logoContainer: {
    flexGrow: { xs: 0.8, md: 0.5 },
    width: { xs: "50%", md: "30%" },
  },
  logoContainerNotAuthenticated: {
    width: "100%",
  },
  listContainer: {
    width: "65%",
    display: { xs: "none", md: "flex" },
    justifyContent: "end",
  },

  tabs: {
    backgroundColor: "rgba(255, 255, 255, 0.19)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "20px",
    boxShadow: "0 0 40px rgba(255, 255, 255, 0.1)",
    height: "50%",
  },
  tabLabel: {
    color: "white",
  },
} as const;
