import React from "react";
import Cards from "./CardList";
import "./Container.css";
import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  contents: {
    flexGrow: 1,
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));
const Container = () => {
  const classes = useStyle();
  return (
    <div className={classes.contents}>
      <Cards />
    </div>
  );
};

export default Container;
