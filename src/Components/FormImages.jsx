import React from "react";
import PropTypes from "prop-types";

const FormImages = (props) => {
  return (
    <>
      <form className="d-flex" onSubmit={props.handleSubmit}>
        <input type="text" name="inputText" className={props.className} />

        <button className="btn  btn-outline-primary">Search</button>
      </form>
    </>
  );
};

FormImages.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

export default FormImages;
