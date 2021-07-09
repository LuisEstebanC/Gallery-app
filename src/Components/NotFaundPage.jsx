import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  NotFoundImage: {
    textAlign: "center",
    width: "100%",
  },
  imageDiv: {
    justifyContent: "center",
    textAlign: "-webkit-center",
  },
  image: {
    width: "40%",
  },
}));
const NotFaundPage = () => {
  const classes = useStyle();
  return (
    <div className={classes.NotFoundImage}>
      <Typography variant="subtitle2" gutterBottom>
        There are no results of your search,write in english and check spelling
        mistakes{" "}
      </Typography>
      <div className={classes.imageDiv} target="_blank">
        <img
          className={classes.image}
          src="https://media.giphy.com/media/9J7tdYltWyXIY/source.gif"
          border="0"
          alt="giphy"
        />
      </div>
    </div>
  );
};

export default NotFaundPage;
