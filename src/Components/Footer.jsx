import React from "react";
import { Container, Grid, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
const drawerWidth = 240;
const useStyle = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  title: {
    fontSize: "2rem",
    color: "inherit",
    fontWeight: 600,
  },
  links: {
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "inherit",
    fontWeight: 100,
  },
  content: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
}));
const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.content}>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="#f50057"
        color="white"
      >
        <Container>
          <Grid container spacing={2}></Grid>
          <Box textAlign="center" pt={5} pb={{ xs: 5, sm: 0 }}>
            {" "}
            Luis Capellan - &copy;{new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
