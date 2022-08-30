import { FC, useState } from "react";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";

import MenuItem from "@mui/material/MenuItem";
export interface Props {}

export const Navigation: FC<Props> = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={styles.navBarContainer}>
      <Box sx={styles.mobileNavMenu}>
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
            {" "}
            <MenuItem sx={styles.mobileMenuItems}>
              <Link to="/" style={styles.mobileLinkItem}>
                Home
              </Link>
            </MenuItem>
            <MenuItem sx={styles.mobileMenuItems}>
              <Link to="/charts" style={styles.mobileLinkItem}>
                Charts
              </Link>
            </MenuItem>
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
        <ul style={styles.list}>
          {" "}
          <li style={styles.listItem}>
            <Link to="/">Home</Link>
          </li>
          <li style={styles.listItem}>
            <Link to="/charts">Charts</Link>
          </li>
        </ul>
      </Box>
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
    backgroundColor: "secondary.light",
    width: "30vh",
    display: "grid",
    justifyContent: "center",
  },
  mobileMenuItems: {
    width: "30vh",
    display: "flex",
    justifyContent: "center",
  },
  mobileLinkItem: {
    textDecoration: "none",
    color: "black",
  },

  logoContainer: {
    flexGrow: { xs: 0.8, md: 0.5 },
  },
  listContainer: {
    width: "60%",
    display: { xs: "none", md: "flex" },
    justifyContent: "end",
  },
  list: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "flex-start",
    gap: "1rem",
  },
  listItem: {
    display: "inline",
    backgroundColor: "white",
    padding: "0.6rem 2.8rem",
    borderRadius: "5px",
  },
} as const;
