import React from "react";

import {
  makeStyles,
  Drawer,
  Divider,
  Typography,
  Box,
} from "@material-ui/core";
import DrawerLeftList from "./DrawerLeftList";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  offset: theme.mixins.toolbar,
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  draweHeader: {
    minHeight: 56,
    [`${theme.breakpoints.up("xs")} and (orientation: landscape)`]: {
      minHeight: 48,
    },
    [theme.breakpoints.up("sm")]: {
      minHeight: 64,
    },
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: "24px",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const DrawerLeft = (props) => {
  const classes = useStyle();
  return (
    <Drawer
      className={classes.drawerWidth}
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
      variant={props.variant}
      open={props.open}
      onClose={props.onClose ? props.onClose : null}
    >
      <div className={classes.draweHeader}>
        <Box>
          <Typography variant="h6" justifyContent="center">
            Gallery app
          </Typography>
        </Box>

        <Typography variant="caption" display="block" gutterBottom>
          V1.1.1
        </Typography>
      </div>
      <Divider />
      <DrawerLeftList />
    </Drawer>
  );
};

export default DrawerLeft;
