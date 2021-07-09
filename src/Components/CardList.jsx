import React, { useContext, useEffect, useState } from "react";
import { useFetchImages } from "../hooks/useFetchImages";
import Card from "./Card";
import Loading from "./Loading";
import { makeStyles } from "@material-ui/core/styles";
import { withWidth, Container, Typography, Box } from "@material-ui/core";
import { resultSearchContext } from "../contexts/NavOptionsContext";
import NotFaundPage from "./NotFaundPage";

const useStyle = makeStyles((theme) => ({
  maindiv: {},
  offset: theme.mixins.toolbar,
  typography: {
    margin: "auto",
  },
  notFoundGif: {
    alignContent: "center",
    width: "20%",
  },

  containerDisplay: {
    webkitColumnCount: 3,
    mozColumnCount: 3,
    columnCount: 5,
    webkitColumnGap: "15px",
    mozColumnGap: "15px",
    columnGap: "0px",
    [theme.breakpoints.down("md")]: {
      columnCount: 4,
    },
    [theme.breakpoints.down("sm")]: {
      columnCount: 3,
    },
    [theme.breakpoints.down("xs")]: {
      columnCount: 2,
    },
  },
  cardsItems: {
    marginTop: "3%",
    marginBottom: "15px",
    border: "1px solid transparent",
    borderRadius: "5px",
    height: "fit-content",
    gridColumn: "span 1",
    margin: "1px 2px",
  },
}));

const Cards = (props) => {
  const { searchResult } = useContext(resultSearchContext);
  const classes = useStyle();
  const [ruslts, setRuslts] = useState("");
  const [images, loading] = useFetchImages();
  console.log(typeof images);
  console.log(images);

  const changeResults = () => {
    if (!images === null || images[0]) {
      setRuslts(`Results of ${searchResult}...`);
    } else {
      setRuslts("");
    }
  };

  useEffect(() => {
    changeResults();
  }, [images]);
  return (
    <div>
      <div className={classes.maindiv}>
        <div className="loading">{loading && <Loading />}</div>
        <Typography variant="h6">size:{props.width}</Typography>
        {searchResult ? (
          <Box
            display="flex"
            width={500}
            height={80}
            alignItems="center"
            justifyContent="center"
          >
            <Typography
              className={classes.typography}
              variant="h4"
              gutterBottom
            >
              {ruslts}
            </Typography>
          </Box>
        ) : null}
      </div>
      {!images === null || images[0] ? (
        <Container>
          <div className={classes.containerDisplay}>
            <div className={classes.cardsItems}>
              {images.map((img) => (
                <Card classname="imgCards" key={img.id} img={img.urls.small} />
              ))}
            </div>
          </div>
        </Container>
      ) : (
        <div>
          <NotFaundPage />
        </div>
      )}
    </div>
  );
};

export default withWidth()(Cards);
