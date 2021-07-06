import React, { useContext } from "react";
import FormImages from "./FormImages";
import PropTypes from "prop-types";
import { InputContext } from "../contexts/InputContext";

const Navbar = () => {
  const { setInput } = useContext(InputContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    const text = e.target[0].value;

    setInput(text);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1" href="#">
            Gallery App
          </span>
        </div>
        <div className="forndiv ">
          <FormImages className="form-left" handleSubmit={handleSubmit} />
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  setInput: PropTypes.func,
};

export default Navbar;
