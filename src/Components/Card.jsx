import React from 'react'
import PropTypes from 'prop-types'

const Card = ({img}) => {
    return (
        <>
            <div className='card'>
                <img src={img} alt="imagen" />
            </div>
        </>
    );
};

Card.propTypes = {
    img: PropTypes.string,
};

export default Card;
