import React, { useContext, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "../Components/Container";
import Footer from "../Components/Footer";
import PropTypes from "prop-types";
import Header from "../Components/Header";
import { makeStyles } from "@material-ui/core/styles";
import DrawerLeft from "../Components/DrawerLeft";
import { Hidden } from "@material-ui/core";
import { handleDrawerContex } from "../contexts/NavOptionsContext";

const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));
const AppRouter = () => {
  const classes = useStyle();
  const { openDrawer, setOpenDrawer } = useContext(handleDrawerContex);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Router>
      <Header />
      <Hidden smDown>
        <DrawerLeft variant="permanent" open={true} />
      </Hidden>
      <Hidden mdUp>
        <DrawerLeft
          variant="temporary"
          open={openDrawer}
          onClose={handleDrawer}
        />
      </Hidden>
      <Container />
      <div className={classes.offset}></div>
      <Footer />
    </Router>
  );
};
AppRouter.propTypes = {
  setOpenDrawer: PropTypes.func,
};

export default AppRouter;
