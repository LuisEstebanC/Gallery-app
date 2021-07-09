import React, { useContext } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { SelectContext } from "../contexts/NavOptionsContext";

import SearchIcon from "@material-ui/icons/Search";

/*---Styles----*/
import InputBase from "@material-ui/core/InputBase";
import { alpha, makeStyles } from "@material-ui/core/styles";

/*----------------------*/

const useStyles = makeStyles((theme) => ({
  formWraper: {
    marginBottom: "15px",
  },
  form: {
    marginBottom: "8px",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },

    left: "8px",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      left: "8px",
      width: "auto",
    },
  },
  selectContent: {
    width: "118px",
    left: "8px",
    zIndex: 9999,
    borderStyle: "hidden",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "17ch",
    borderRadius: "4px",
    backgroundColor: "#2424",
    margin: "auto",
  },
}));

const FormImages = (props) => {
  const classes = useStyles();
  const { perPage, setPerPage } = useContext(SelectContext);

  const options = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 120, label: "All images" },
  ];

  const selectChange = (e) => {
    const number = e.value;
    setPerPage(number);
  };

  return (
    <div className="right hide-on-med-and-down">
      <div className={classes.formWraper}>
        <div className="input-field col s12"></div>

        <form
          className={classes.form}
          autoComplete="off"
          onSubmit={props.handleSubmit}
        >
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              name="inputText"
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </form>
        <Select
          placeholder={perPage}
          className={classes.selectContent}
          options={options}
          onChange={selectChange}
          styles
        />
      </div>
    </div>
  );
};

FormImages.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormImages;
