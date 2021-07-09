import React from "react";
import PropTypes from "prop-types";
import "./Container.css";
const Card = ({ img, classname }) => {
  return (
    <>
      <div className="cards">
        <img className={classname} src={img} alt="imagen" />
      </div>
    </>
  );
};

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;
