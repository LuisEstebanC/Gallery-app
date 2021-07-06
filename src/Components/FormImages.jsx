import React, { useContext } from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { SelectContext } from "../contexts/NavOptionsContext";

const FormImages = (props) => {
  const { perPage, setPerPage } = useContext(SelectContext);
  const options = [
    { value: 10, label: "10" },
    { value: 20, label: "20" },
    { value: 120, label: "All images" },
  ];

  const customStyles = {
    borderRadius: "4px",
    colors: {
      primary25: "#b8b1bb",
      primary: "#C022F5",
    },
  };

  const selectChange = (e) => {
    const number = e.value;
    setPerPage(number);
  };
  return (
    <div className="right hide-on-med-and-down">
      <form className="d-flex" onSubmit={props.handleSubmit}>
        <Select
          placeholder={perPage}
          className="selectD"
          options={options}
          onChange={selectChange}
          theme={customStyles}
        />
        <input
          type="text"
          name="inputText"
          className={props.className}
          placeholder={props.placeholder}
          spellCheck="false"
        />

        <button className="btn  btn-outline-primary">Search</button>
      </form>
    </div>
  );
};

FormImages.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormImages;
