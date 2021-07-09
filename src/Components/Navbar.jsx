import React, { useContext } from "react";

import PropTypes from "prop-types";

/*-------*/

import { IconButton, Toolbar, AppBar, Hidden } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";

import { handleDrawerContex } from "../contexts/NavOptionsContext";
const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    fontSize: "1.3rem",
    fontWeight: 900,
    flexGrow: 1,
    margin: "auto",
    textAlign: "center",
    maxWidth: "50%",
    maxHeight: "70%",
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));

const Navbar = () => {
  const classes = useStyle();
  const { openDrawer, setOpenDrawer } = useContext(handleDrawerContex);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <>
      <AppBar position="fixed" color="secondary" className={classes.appBar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              color="inherit"
              className={classes.menuButton}
              arial-label="menu"
              onClick={() => handleDrawer()}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h6" noWrap className={classes.title}>
            Gallery App
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
    </>
  );
};

Navbar.propTypes = {
  setInput: PropTypes.func,
  setOpenDrawer: PropTypes.func,
};

export default Navbar;
