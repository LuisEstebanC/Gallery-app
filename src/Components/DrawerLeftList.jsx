import React, { useContext } from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import {
  InputContext,
  resultSearchContext,
} from "../contexts/NavOptionsContext";
import FormImages from "./FormImages";
const DrawerLeftList = () => {
  const { setInput } = useContext(InputContext);
  const { setSearchResult } = useContext(resultSearchContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const text = e.target[0].value;
    setSearchResult(text);
    setInput(text);
  };
  return (
    <>
      <List component="nav">
        <FormImages
          className="input-navbar"
          handleSubmit={handleSubmit}
          placeholder="Search images"
        />
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText>click me!</ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <AddCircleIcon />
          </ListItemIcon>
          <ListItemText>click me again!</ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerLeftList;
