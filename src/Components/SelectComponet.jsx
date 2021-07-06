import React from "react";
import Select from "react-select";
const SelectComponet = (props) => {
  return (
    <div className="selectD">
      <Select
        className="selectD"
        options={props.options}
        onChange={props.selectChange}
        theme={props.customStyles}
      />
    </div>
  );
};

export default SelectComponet;
